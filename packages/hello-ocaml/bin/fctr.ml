open Core

module type ID = sig
  type t
  val of_string : string -> t
  val to_string : t -> string
end

module MakeId () : ID = String

module type ENTITY = sig
  type t
  module Id : ID
  val id : t -> Id.t
end

module type REPO = sig
  type entity
  type t
  type id
  val create : unit -> t
  val save : t -> entity -> unit
  val find : t -> id -> entity option
  val all : t -> entity list
end

module User = struct
  module Id = MakeId ()
  type t = { id : Id.t; name : string }
  let id (u : t) = u.id
end

module Order = struct
  module Id = MakeId ()
  type t = { id : Id.t; user_id: User.Id.t; name : string }
  let id (u : t) = u.id
  let user_id (u : t) = u.user_id
  let name (u : t) = u.name
end


module MakeRepo (E : ENTITY) : REPO with type entity = E.t and type id = E.Id.t = struct
  type entity = E.t
  type t = (string, E.t) Hashtbl.t
  type id = E.Id.t
  let create () = Hashtbl.create (module String)
  let save tbl e = Hashtbl.set ~key:(E.id e |> E.Id.to_string) ~data:e tbl
  let find tbl key = Hashtbl.find tbl (E.Id.to_string key)
  let all = Hashtbl.data
end

module type USER_REPO = REPO with type entity = User.t and type id = User.Id.t

(* let r : (module USER_REPO) = (module UserRepo) *)

(* let run (module R : USER_REPO) = R.create |>  *)

module MakeLoggingRepo (E : ENTITY) : REPO with type entity = E.t and type id = E.Id.t = struct
  include MakeRepo (E)
  let save tbl e = printf "[save] %s\n" (E.id e |> E.Id.to_string); save tbl e
end


let choose_user_repo : string option -> (module USER_REPO) = function
  | Some "logging" -> (module (MakeLoggingRepo (User)))
  | _ -> (module (MakeRepo (User)))

let run (module R : USER_REPO) = let repo = R.create () in
  R.save repo { id = User.Id.of_string "u1"; name = "some name" };
  match R.find repo (User.Id.of_string "u1") with
  | Some u -> print_endline u.name
  | None -> print_endline "not found"

module UserRepo = (val Sys.getenv "REPO_MODE" |> choose_user_repo)

let () = run (module UserRepo)

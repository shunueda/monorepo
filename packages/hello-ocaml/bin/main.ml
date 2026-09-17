open Core

let fold_left ls ~f ~init =
  let rec
    aux ls acc = match ls with
    | [] -> acc
    | hd :: tl -> (aux[@tailcall]) tl (f hd acc)
  in
  (aux[@tailcall]) ls init

let sum ls = fold_left ls ~f:Int.(+) ~init:0

let rec drop_value ls to_drop = match ls with
  | [] -> []
  | hd :: tl ->
     if hd = to_drop then
       drop_value tl to_drop
     else
       hd :: drop_value tl to_drop

let rec ls_rec s =
  if Sys_unix.is_file_exn s
  then [s]
  else
    Sys_unix.ls_dir s |> List.map ~f:(fun sub -> ls_rec (Filename.concat s sub)) |> List.concat

let length ls =
  let rec aux ls acc =
    match ls with
    | [] -> acc
    | _ :: tl -> (aux[@tailcall]) tl (acc + 1)
  in
  aux ls 0

type foo =
  | A of string
  | B of (int * int)

let bar = function
  | A a -> a
  | B (a, b) -> Int.to_string (a * b)

module type User = sig
  type t

  val name: string

  val say_hello : unit -> unit
end

module MyUser : User = struct
  type t

  let name = "foo"

  let say_hello () = printf "Hello, %s\n" name
end

let () = MyUser.say_hello ()

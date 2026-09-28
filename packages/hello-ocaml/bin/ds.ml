open Core

module type STACK = sig
  type 'a t
  val empty : 'a t
  val is_empty : 'a t -> bool
  val push : 'a -> 'a t -> 'a t
  val pop : 'a t -> ('a * 'a t) option
  val size : 'a t -> int
end

module ListStack : STACK = struct
  type 'a t = 'a list
  let empty = []
  let is_empty = List.is_empty
  let push e s = e :: s
  let pop = function
    | hd :: tl -> Some (hd, tl)
    | [] -> None
  let size = List.length
end

module CountedStack : STACK = struct
  type 'a t = ('a list * int)
  let empty = ([], 0)
  let is_empty s = snd s = 0
  let push e s = (e :: fst s, snd s + 1)
  let pop s = match fst s with
  | hd :: tl -> Some (hd, (tl, snd s - 1))
  | [] -> None
  let size = snd
end

module StackUtils (S : STACK) = struct
  let of_list ls = List.fold_right ls ~init:S.empty ~f:S.push

  let to_list s =
    let rec aux ~init:ls s = match S.pop s with
    | Some (hd, tl) -> (aux[@tailcall]) ~init:(hd :: ls) tl
    | None -> ls
    in
    aux ~init:[] s |> List.rev

  let peek s =
    match S.pop s with
    | Some (hd, _) -> Some hd
    | None -> None

  let iter ~f s =
    let rec aux s = match S.pop s with
    | Some (hd, tl) -> f hd; (aux[@tailcall]) tl
    | None -> ()
  in
  aux s
end

module type QUEUE = sig
  type 'a t
  val empty : 'a t
  val is_empty : 'a t -> bool
  val enqueue : 'a -> 'a t -> 'a t
  val dequeue : 'a t -> ('a * 'a t) option
end


module MakeQueue (S : STACK) : QUEUE = struct
  type 'a t = ('a S.t * 'a S.t)
  let empty = (S.empty, S.empty)
  let is_empty q = S.is_empty (fst q) && S.is_empty (snd q)
  let enqueue e q = (S.push e (fst q), snd q)
  let dequeue (f, s) = match s |> S.pop with
  | Some (hd, tl) -> Some (hd, (f, tl))
  | None ->
  let rec aux ~init s = match S.pop s with
  | Some (hd, tl) -> (aux[@tailcall]) ~init:(S.push hd init) tl
  | None -> init
  in
  match S.pop (aux ~init:S.empty f) with
  | Some (hd, tl) -> Some (hd, (S.empty, tl))
  | None -> None
end

module SQ = MakeQueue (ListStack)

module type COMPARABLE = sig
  type t
  val compare : t -> t -> int
  val to_string : t -> string
end

module type SET = sig
  type elem
  type t
  val empty : t
  val add : elem -> t -> t
  val mem : elem -> t -> bool
  val to_list : t -> elem list
  val to_string : t -> string
end

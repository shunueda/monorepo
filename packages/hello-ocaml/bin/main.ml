open Core

module type Stack = sig
  type 'a t

  val empty : 'a t

  val push : 'a t -> 'a -> 'a t

  val peek : 'a t -> 'a option

  val pop : 'a t -> ('a * 'a t) option
end

module ListStack : Stack = struct
  type 'a t = 'a list

  let empty = []

  let push s e = e :: s

  let peek = List.hd

  let pop = function
    | [] -> None
    | hd :: tl -> Some (hd, tl)
end

module Int_map = Map.Make (Int)

let count_occurrences (ls : int list) : int Int_map.t =
  List.fold ls ~init:Int_map.empty ~f:(fun accum a -> Map.update accum a
    ~f:(fun v -> match v with
    | Some curr -> curr + 1
    | None -> 1
    ))

module type Comparable = sig
  type t
  val compare : t -> t -> int
end

module Make_interval (Endpoint : Comparable) = struct
  type t

  let create (a : Endpoint.t) (b : Endpoint.t) : t
end

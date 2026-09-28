open Core

type suite = Spade | Heart | Diamond | Club
  [@@deriving compare, sexp]

let compare_int a b = Int.compare b a

type card = { suite : suite; rank : Int.t }
  [@@deriving compare, sexp]

module Card = struct
  type t = { suite : suite; rank : int }

  [@@deriving compare, sexp]
end

let () =
  [{ suite = Spade; rank = 1; }; { suite = Heart; rank = 2; }; { suite = Diamond; rank = 3; }; { suite = Spade; rank = 2}]
  |> List.sort ~compare:compare_card
  |> List.map ~f:(Fn.compose Sexp.to_string_hum sexp_of_card)
  |> List.iter ~f:print_endline

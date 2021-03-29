export interface PokemonDetail {
  abilities: String,
}

export interface Pokemon {
  id: String
  name: String,
  sprite: String,
  details: PokemonDetail
}

export interface PokemonTeam {
  name: String,
  sprite: String,
}

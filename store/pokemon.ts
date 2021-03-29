import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Pokemon, PokemonTeam } from '~/utils/pokeInterface'

@Module({
  stateFactory: true,
  namespaced: true
})

export default class PokemonModule extends VuexModule {
  pokemons: Pokemon[] = []
  teamPokemon: PokemonTeam[] = []

  @Mutation
  public SET_POKEMON_LIST (pokemons: Pokemon[]) {
    this.pokemons = pokemons
  }

  @Mutation
  public ADD_POKEMON_TEAM (pokemon: Pokemon) {
    this.teamPokemon.push(pokemon)
  }

  @Mutation
  public DEL_POKEMON_TEAM (index: number) {
    this.teamPokemon.splice(index, 1)
  }

  @Action({ rawError: true })
  async getPokemonData () {
    const pokemonList: Pokemon[] = []
    const pokemons =
      await fetch('https://pokeapi.co/api/v2/pokemon/?limit=105')
        .then((response) => {
          return response.json()
        })
        .then(res => res.results)

    // boucler pour merge les données de chaque pokemon

    for (let index = 0; index < pokemons.length; index++) {
      await fetch(pokemons[index].url)
        .then((response) => {
          return response.json()
        })
        .then((res) => {
          const pokemon = {
            name: res.name,
            sprite: res.sprites.other.dream_world.front_default,
            id: res.id,
            details: {
              abilities: res.abilities
            }
          }
          pokemonList.push(pokemon)
        })
    }

    // l'utilisation de this.SET_POKEMON_LIST ne fonctionne pas
    this.context.commit('SET_POKEMON_LIST', pokemonList)
  }
}

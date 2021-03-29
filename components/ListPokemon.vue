<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      style="justify-content: center"
    />

    <b-form-input v-model="pokeSearch" size="lg" placeholder="Rechercher" />

    <b-table
      id="my-table"
      striped
      hover
      :items="pokeSearch.length ? pokeFiltered : pokemons"
      :fields="fieldsDisplayed"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(name)="data">
        <b>{{ data.item.name.toUpperCase() }}</b>
      </template>

      <template #cell(sprite)="data" style="background-color: blue">
        <img :src="data.item.sprite" width="60" :alt="data.item.name + '_img'">
      </template>

      <template #cell(action)="row">
        <b-button-group>
          <b-button variant="success" @click="addToTeam(row)">
            Add team
          </b-button>
          <b-button variant="info" @click="goToDetail(row)">
            More info
          </b-button>
        </b-button-group>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      style="justify-content: center"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace, Emit } from 'nuxt-property-decorator'
import { Pokemon, PokemonTeam } from '~/utils/pokeInterface'
const pokemon = namespace('pokemon')

@Component
export default class ListPokemon extends Vue {
  perPage: number = 20
  currentPage: number = 1
  pokeSearch: string = ''
  fieldsDisplayed: Array<String> = ['name', 'sprite', 'action']

  // State
  @pokemon.State
  public pokemons!: Pokemon[]

  @pokemon.State
  public teamPokemon!: PokemonTeam[]

  // Action
  @pokemon.Action
  public getPokemonData!: () => void

  // Mutation
  @pokemon.Mutation
  public ADD_POKEMON_TEAM!: (pokemon: Pokemon) => void

  async mounted () {
    await this.getPokemonData()
  }

  // computed
  get rows () {
    return this.pokemons.length
  }

  // search filter
  get pokeFiltered () {
    return this.pokemons.filter(poke => poke.name.includes(this.pokeSearch.toLowerCase()))
  }

  // methods
  @Emit()
  goToDetail (row: any) {
    this.$router.push({
      path: '/pokemon',
      query: row.item
    })
  }

  @Emit()
  addToTeam (row: any) {
    if (this.teamPokemon.length < 6) {
      this.ADD_POKEMON_TEAM(row.item)
    }
  }
}
</script>

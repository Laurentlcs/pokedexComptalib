<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      style="justify-content: center"
    />

    <b-table
      id="my-table"
      striped
      hover
      :items="pokemons"
      :per-page="perPage"
      :current-page="currentPage"
    />

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
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { Pokemon } from '~/utils/pokeInterface'
const pokemon = namespace('pokemon')

@Component
export default class ListPokemon extends Vue {
  perPage: number = 20
  currentPage: number = 1

  @pokemon.State
  public pokemons!: Pokemon[]

  @pokemon.Action
  public getPokemonData!: () => void

  async mounted () {
    await this.getPokemonData()
  }

  // computed
  get rows () {
    return this.pokemons.length
  }
}
</script>

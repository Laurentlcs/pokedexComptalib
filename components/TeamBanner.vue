<template>
  <div v-if="teamPokemon.length" class="d-flex flex-wrap justify-content-center">
    <div v-for="(poke, index) in teamPokemon" :key="index" class="pokeCard d-flex flex-column align-items-center ml-2 mb-2">
      <div class="d-flex justify-content-end" style="width: 100%">
        <b-icon icon="x-circle-fill" style="color: #dc3444;" @click="removeFromTeam(index)" />
      </div>
      <p style="margin: 0">
        {{ poke.name }}
      </p>
      <img width="50" :src="poke.sprite">
    </div>
  </div>
  <div v-else class="mt-4" style="text-align: center">
    <h3>No team defined</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace, Emit } from 'nuxt-property-decorator'
import { PokemonTeam } from '~/utils/pokeInterface'

const pokemon = namespace('pokemon')

@Component
export default class TeamPokemon extends Vue {
  @pokemon.State
  public teamPokemon!: PokemonTeam[]

  @pokemon.Mutation
  public DEL_POKEMON_TEAM!: (index: number) => void

  @Emit()
  removeFromTeam (index: number) {
    this.DEL_POKEMON_TEAM(index)
  }
}
</script>

<style scoped>
.pokeCard {
  border: solid #dee2e6 2px;
  background-color: white;
  border-radius: 10%;
  width: 6rem;
  height: 6rem;
}

</style>

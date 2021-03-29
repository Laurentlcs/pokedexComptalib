<template>
  <div v-if="teamPokemon.length" class="d-flex flex-wrap justify-content-center">
    <div v-for="(poke, index) in teamPokemon" :key="index" class="pokeCard d-flex flex-column align-items-center ml-2 mb-2">
      <p style="margin: 0">
        {{ poke.name }}
      </p>
      <img width="50" :src="poke.sprite">
    </div>
  </div>
  <div v-else>
    <h3>No team defined</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { PokemonTeam } from '~/utils/pokeInterface'

const pokemon = namespace('pokemon')

@Component
export default class TeamPokemon extends Vue {
  @pokemon.State
  public teamPokemon!: PokemonTeam[]
}

</script>

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
      :items="items"
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
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ListPokemon extends Vue {
  perPage: number = 20
  currentPage: number = 1

  items: Array<object> = [
    {
      name: 'poke1',
      sprite: 'urlImage'
    },
    {
      name: 'poke2',
      sprite: 'urlImage'
    }
  ]
}
</script>

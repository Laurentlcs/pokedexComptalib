<template>
  <div class="listPokemon mt-4">
    <ListPokemon />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ListPokemon from '~/components/ListPokemon.vue'

@Component({
  components: { ListPokemon }
})
export default class Home extends Vue {}
</script>

<style scoped>
.listPokemon {
  grid-area: 3 / 1 / 6 / 6;
  max-height: 10rem;
}
</style>>

</style>

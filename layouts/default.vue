<template>
  <div class="parent">
    <div class="header">
      <Header />
    </div>
    <div class="teamBanner">
      <TeamBanner />
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'
import TeamBanner from '~/components/TeamBanner.vue'

@Component({
  components: { Header, TeamBanner }
})

export default class Layout extends Vue {}
</script>

<style>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-height: 100vh;
}

.header {
  grid-area: 1 / 1 / 2 / 6;
  max-height: 8vh;
}

.teamBanner {
  grid-area: 2 / 1 / 3 / 6;
}
</style>

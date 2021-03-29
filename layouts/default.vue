<template>
  <div class="parent">
    <div class="header">
      <!-- Header Component -->
      <h3>HEADER</h3>
    </div>
    <div class="teamBanner">
      <!-- TeamBanner Component -->
      <h3>TEAM-BANNER</h3>
    </div>
    <Nuxt />
  </div>
</template>

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
  background-color: red;
}

.teamBanner {
  grid-area: 2 / 1 / 3 / 6;
  background-color: blue;
}
</style>

<template>
  <div class="d-flex flex-column align-items-center" style="width: 100vw">
    <h4> {{ $route.query.name.toUpperCase() }} </h4>
    <img :src="$route.query.sprite">
    <h3 class="mt-4">
      ABILITIES
    </h3>
    <div class="d-flex flex-column mt-2">
      <p v-for="(ability, index) in $route.query.details.abilities" :key="index">
        - {{ ability.ability.name }}
      </p>
    </div>
    <b-button variant="info" @click="$router.push('/')">
      Back
    </b-button>
  </div>
</template>

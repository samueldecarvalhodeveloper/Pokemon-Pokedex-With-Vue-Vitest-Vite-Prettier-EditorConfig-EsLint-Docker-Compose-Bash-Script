<script setup lang="ts">
import PokemonLogo from "./pokemon_logo.vue";
</script>

<template>
  <section class="pokemon_banner">
    <PokemonLogo />
  </section>
</template>

<style>
.pokemon_banner {
  width: 100%;
  height: 100vh;
  max-height: 540rem;
  background-image: url("/assets/images/banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70rem 32rem 0rem 32rem;
  display: flex;
  justify-content: center;
}
</style>

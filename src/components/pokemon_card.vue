<script setup lang="ts">
import {
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
} from "@/constants/user_interface_constants";
import type PokemonEntity from "@/domains/pokemon/infrastructure/entities/pokemon_entity";

defineProps<{
  pokemonData: PokemonEntity;
}>();
</script>

<template>
  <article class="pokemon_card">
    <div
      :class="`image ${pokemonData.types[0].toLocaleLowerCase()}_background`">
      <img :src="pokemonData.image" />
    </div>
    <div class="description">
      <h3 class="id"
        >#{{
          pokemonData.id
            .toString()
            .padStart(
              POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
              POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
            )
        }}</h3
      >
      <h2 class="name">{{ pokemonData.name }}</h2>
      <ul class="types">
        <li
          v-for="(type, index) in pokemonData.types"
          :key="index"
          :class="`type ${type.toLocaleLowerCase()}`">
          {{ type }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style>
.pokemon_card {
  width: 100%;
  height: 293rem;
  border: 1rem solid #bfacac;
  background: #fff2f2;
  border-radius: 8rem;
  overflow: hidden;
  max-width: 250rem;
}

.image {
  width: 100%;
  height: 171rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1rem solid #bfacac;
  padding: 32rem;
}

.image > img {
  width: 100%;
  max-height: 139rem;
  max-width: 139rem;
}

.description {
  margin: 0rem;
  padding: 8rem 16rem 24rem;
  height: calc(100% - 173rem);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
}

.id {
  color: #bfacac;
  font-weight: 900;
  font-size: 12rem;
  line-height: 150%;
}

.name {
  color: #0f0000;
  font-weight: 600;
  font-size: 32rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 125%;
  margin-bottom: 8rem;
}

.types {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  list-style: none;
}

.type {
  padding: 0rem 8rem;
  line-height: 150%;
  border-radius: 4rem;
  color: #fff2f2;
}
</style>

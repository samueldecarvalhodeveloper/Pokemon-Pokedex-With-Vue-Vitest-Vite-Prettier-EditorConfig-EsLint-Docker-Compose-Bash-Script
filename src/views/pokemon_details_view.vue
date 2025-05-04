<script setup lang="ts">
import LoadingIndicator from "@/components/loading_indicator.vue";
import PokemonCard from "@/components/pokemon_card.vue";
import { HOME_PAGE_ROUTE } from "@/constants/user_interface_constants";
import type PokemonEntity from "@/domains/pokemon/infrastructure/entities/pokemon_entity";
import PokemonRepositoryFactory from "@/domains/pokemon/pokemon_repository_factory";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const pokemonData = ref<PokemonEntity>();
const isPokemonDataLoaded = ref(false);
const route = useRoute();
const router = useRouter();
const pokemonRepository = PokemonRepositoryFactory.getInstance();
const pokemonId = Number(route.params.id);

if (!pokemonId) {
  router.push(HOME_PAGE_ROUTE);
}

onMounted(async () => {
  pokemonData.value = await pokemonRepository.getPokemon(pokemonId);

  isPokemonDataLoaded.value = true;
});
</script>

<template>
  <section class="pokemon_details">
    <section class="content">
      <PokemonCard
        :pokemon-data="pokemonData!"
        v-if="isPokemonDataLoaded" />
      <LoadingIndicator v-else />
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu orci
        ligula. Proin condimentum metus in dui lobortis, a cursus purus dapibus.
      </p>
      <RouterLink
        to="/"
        class="return_link">
        Back To Home ->
      </RouterLink>
    </section>
  </section>
</template>

<style>
.pokemon_details {
  width: 100%;
  min-height: 100%;
  padding: 32rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  max-width: 691rem;
  background: #fff2f2;
  border: 1rem solid #bfacac;
  border-radius: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 32rem;
  padding: 32rem;
}

.description {
  color: #0f0000;
  text-align: center;
}

.return_link {
  color: #0f0000;
  font-weight: 900;
  line-height: 150%;
  padding: 14rem;
}

.return_link:hover {
  color: #0f0000;
  font-weight: 900;
  line-height: 150%;
  padding: 14rem;
  text-decoration: none;
}

@media screen and (min-width: 540px) {
  .pokemon_details {
    padding: 32rem 32rem;
  }
}
</style>

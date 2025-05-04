<script setup lang="ts">
import LoadingIndicator from "@/components/loading_indicator.vue";
import PagePagination from "@/components/page_pagination.vue";
import PokemonBanner from "@/components/pokemon_banner.vue";
import PokemonCard from "@/components/pokemon_card.vue";
import PokemonSearchingInput from "@/components/pokemon_searching_input.vue";
import SmoothScroller from "@/components/smooth_scroller.vue";
import {
  FIRST_PAGE,
  POKEMON_DETAILS_PAGE_ROUTE_WITHOUT_ID,
} from "@/constants/user_interface_constants";
import type PokemonEntity from "@/domains/pokemon/infrastructure/entities/pokemon_entity";
import PokemonRepositoryFactory from "@/domains/pokemon/pokemon_repository_factory";
import PokemonSearcher from "@/infrastructure/adapters/pokemon_searcher";
import { ref, onMounted } from "vue";

const matrixOfPokemonData = ref<Array<Array<PokemonEntity>>>([]);
const isMatrixOfPokemonDataLoaded = ref(false);
const searchingPokemonName = ref("");
const currentPage = ref(FIRST_PAGE);
const pokemonRepository = PokemonRepositoryFactory.getInstance();

onMounted(async () => {
  matrixOfPokemonData.value = await pokemonRepository.getPokemonMatrix();

  isMatrixOfPokemonDataLoaded.value = true;
});
</script>

<template>
  <section class="pokemon_listing_page">
    <PokemonBanner />
    <section class="pokemon_listing_section">
      <p class="description">
        Nec bibendum pellentesque massa eget non sem in.
        <br />
        Nulla amet id congue cursus lorem
      </p>
      <PokemonSearchingInput
        :value="searchingPokemonName"
        :change="
          (updatedSearchingPokemonName) => {
            searchingPokemonName = updatedSearchingPokemonName;
          }
        " />
      <template v-if="isMatrixOfPokemonDataLoaded">
        <div
          class="pokemons_listing"
          v-if="searchingPokemonName">
          <div
            v-for="(pokemon, index) in PokemonSearcher.getPokemons(
              searchingPokemonName,
              matrixOfPokemonData!,
            )"
            :key="index"
            class="pokemon_card_container">
            <RouterLink
              :to="POKEMON_DETAILS_PAGE_ROUTE_WITHOUT_ID + pokemon.id + '/'"
              class="pokemon_link">
              <PokemonCard :pokemon-data="pokemon" />
            </RouterLink>
          </div>
        </div>
        <template v-else>
          <div class="pokemons_listing">
            <div
              v-for="(pokemon, index) in matrixOfPokemonData![currentPage - 1]"
              :key="index"
              class="pokemon_card_container">
              <RouterLink
                :to="POKEMON_DETAILS_PAGE_ROUTE_WITHOUT_ID + pokemon.id + '/'"
                class="pokemon_link">
                <PokemonCard :pokemon-data="pokemon" />
              </RouterLink>
            </div>
          </div>
          <PagePagination
            :current-page="currentPage"
            :number-of-pages="matrixOfPokemonData!.length"
            v-on:previous-button-click="
              (updatedCurrentPage) => {
                currentPage = updatedCurrentPage;
              }
            "
            v-on:next-button-click="
              (updatedCurrentPage) => {
                currentPage = updatedCurrentPage;
              }
            "
            v-on:page-pagination-input-change="
              (updatedCurrentPage) => {
                currentPage = updatedCurrentPage;
              }
            " />
        </template>
      </template>
      <LoadingIndicator v-else />
    </section>
    <SmoothScroller />
  </section>
</template>

<style>
.pokemon_listing_page {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.pokemon_listing_section {
  width: 100%;
  background: #fff2f2;
  border: 1rem solid #bfacac;
  border-radius: 16rem;
  padding: 32rem;
  position: relative;
  top: -230rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1220rem;
  flex-flow: column;
}

.description {
  text-align: center;
  font-size: 16rem;
  font-weight: 500;
  color: #bfacac;
  margin-bottom: 32rem;
}

.pokemons_listing {
  margin-bottom: 32rem;
  display: grid;
  gap: 32rem;
  grid-template-columns: 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.pokemons_listing > article {
  align-self: center;
}

.pokemon_card_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.pokemon_link {
  width: 100%;
  max-width: 250rem;
  text-decoration: none;
}

@media screen and (min-width: 540px) {
  .pokemon_listing_section {
    width: calc(100% - 64rem);
    margin: 32rem;
    padding: 32rem;
  }

  .pokemons_listing {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 768px) {
  .pokemons_listing {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1024px) {
  .pokemons_listing {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>

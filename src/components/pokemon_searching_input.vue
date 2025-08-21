<script setup lang="ts">
defineProps<{
  value: string;
  change: (updatedSearchingPokemonName: string) => void;
}>();
</script>

<template>
  <div class="pokemon_searching_input">
    <p className="label">Search</p>
    <input
      data-testid="pokemon_name_searching_input"
      type="text"
      className="input"
      :value="value"
      @change="
        (event) => {
          change((event.target as HTMLInputElement).value);
        }
      " />
  </div>
</template>

<style>
.pokemon_searching_input {
  width: 100%;
  max-width: 430rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  gap: 4rem;
  margin-bottom: 48rem;
}

.label {
  font-size: 14rem;
  font-weight: 500;
  color: #bfacac;
  position: relative;
  left: 14rem;
}

.input {
  width: 100%;
  background: #fff2f2;
  border: 1rem solid #bfacac;
  font-size: 16rem;
  font-weight: 600;
  padding: 8rem 16rem;
  border-radius: 6rem;
  color: #0f0000;
}
</style>

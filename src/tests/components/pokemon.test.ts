import { describe, beforeAll, test, expect, vi, type Mock } from "vitest";
import axios from "axios";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_ID,
  MOCK_POKEMON_IMAGE,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_TYPES,
  POKEMON_ENTITY_OBJECT,
} from "@/constants/pokemon_constants";
import PokemonRepository from "@/domains/pokemon/pokemon_repository";

vi.mock("axios");

describe("Test Component Pokemon", () => {
  let pokemonRepository: PokemonRepository;

  beforeAll(() => {
    pokemonRepository = new PokemonRepository(axios);
  });

  test("Test Getting Matrix Of Pokemons Data From Service", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    const retrievedFromServiceMatrixOfPokemon =
      await pokemonRepository.getPokemonMatrix();

    expect(retrievedFromServiceMatrixOfPokemon[0][0].id).toEqual(
      MATRIX_OF_POKEMON_ENTITY_OBJECT[0][0].id,
    );
    expect(retrievedFromServiceMatrixOfPokemon[0][0].name).toEqual(
      MATRIX_OF_POKEMON_ENTITY_OBJECT[0][0].name,
    );
    expect(retrievedFromServiceMatrixOfPokemon[0][0].image).toEqual(
      MATRIX_OF_POKEMON_ENTITY_OBJECT[0][0].image,
    );
    expect(retrievedFromServiceMatrixOfPokemon[0][0].types).toEqual(
      MATRIX_OF_POKEMON_ENTITY_OBJECT[0][0].types,
    );
  });

  test("Test Getting Pokemon Data From Service", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: POKEMON_ENTITY_OBJECT,
    });

    const retrievedFromServicePokemonData =
      await pokemonRepository.getPokemon(MOCK_POKEMON_ID);

    expect(retrievedFromServicePokemonData.id).toEqual(MOCK_POKEMON_ID);
    expect(retrievedFromServicePokemonData.name).toEqual(MOCK_POKEMON_NAME);
    expect(retrievedFromServicePokemonData.image).toEqual(MOCK_POKEMON_IMAGE);
    expect(retrievedFromServicePokemonData.types).toEqual(MOCK_POKEMON_TYPES);
  });
});

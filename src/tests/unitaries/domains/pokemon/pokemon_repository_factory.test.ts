import axios from "axios";
import { MATRIX_OF_POKEMON_ENTITY_OBJECT } from "../../../../constants/pokemon_constants";
import PokemonRepositoryFactory from "../../../../domains/pokemon/pokemon_repository_factory";
import { describe, expect, test, vi, type Mock } from "vitest";

vi.mock("axios");

describe("Test Class PokemonRepositoryFactory", () => {
  test("Test If Entity Describes How Pokemon Entity Should Look On System", async () => {
    const instance = PokemonRepositoryFactory.getInstance();

    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    const retrievedFromServiceMatrixOfPokemon =
      await instance.getPokemonMatrix();

    expect(retrievedFromServiceMatrixOfPokemon).toEqual(
      MATRIX_OF_POKEMON_ENTITY_OBJECT,
    );
  });
});

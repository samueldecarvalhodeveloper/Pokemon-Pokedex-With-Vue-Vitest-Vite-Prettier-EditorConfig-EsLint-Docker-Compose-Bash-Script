import { describe, test, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import PokemonSearchingInput from "@/components/pokemon_searching_input.vue";
import { MOCK_POKEMON_NAME } from "@/constants/pokemon_constants";
import { POKEMON_NAME_SEARCHING_INPUT_TEST_ID } from "@/constants/user_interface_constants";

describe("Test Component PokemonSearchingInput", () => {
  let wrapper: VueWrapper;
  let searchedValue = "";

  beforeEach(() => {
    wrapper = mount(PokemonSearchingInput, {
      props: {
        value: searchedValue,
        change: (updatedSearchingPokemonName) => {
          searchedValue = updatedSearchingPokemonName;
        },
      },
    });
  });

  test("Test If Element Dispatches On Change Event", async () => {
    await wrapper
      .find(POKEMON_NAME_SEARCHING_INPUT_TEST_ID)
      .setValue(MOCK_POKEMON_NAME);

    expect(searchedValue).toEqual(MOCK_POKEMON_NAME);
  });
});

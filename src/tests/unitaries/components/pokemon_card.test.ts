import { describe, beforeEach, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import PokemonCard from "@/components/pokemon_card.vue";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_TYPES,
  POKEMON_ENTITY_OBJECT,
} from "@/constants/pokemon_constants";
import {
  ID_DELIMITER_CHARACTER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
} from "@/constants/user_interface_constants";

describe("Test Component PokemonCard", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(PokemonCard, {
      props: { pokemonData: POKEMON_ENTITY_OBJECT },
    });
  });

  test("Test If Component Renders", () => {
    expect(wrapper.text()).toContain(MOCK_POKEMON_NAME);
    expect(wrapper.text()).toContain(
      ID_DELIMITER_CHARACTER +
        MOCK_POKEMON_ID.toString().padStart(
          POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
          POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
        ),
    );
    expect(wrapper.text()).toContain(MOCK_POKEMON_TYPES[0]);
    expect(wrapper.text()).toContain(MOCK_POKEMON_TYPES[1]);
  });
});

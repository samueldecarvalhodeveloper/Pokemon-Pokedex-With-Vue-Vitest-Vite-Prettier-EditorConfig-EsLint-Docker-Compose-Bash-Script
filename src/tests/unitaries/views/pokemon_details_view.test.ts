import { describe, test, expect, vi, type Mock } from "vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import PokemonDetailsView from "@/views/pokemon_details_view.vue";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "@/constants/pokemon_constants";
import axios from "axios";
import { useRoute } from "vue-router";
import { LOADING_INDICATOR_TEST_ID } from "@/constants/user_interface_constants";

vi.mock("axios");
vi.mock("vue-router", () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(),
}));

describe("Test Vue PokemonDetails", () => {
  let wrapper: VueWrapper;

  test("Test If Loading Indicator Is Shown When Pokemon Data Is Not Loaded", () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: POKEMON_ENTITY_OBJECT,
    });

    (useRoute as Mock).mockReturnValue({ params: { id: MOCK_POKEMON_ID } });

    wrapper = mount(PokemonDetailsView);

    expect(wrapper.find(LOADING_INDICATOR_TEST_ID).element).toBeTruthy();
  });

  test("Test If Pokemon Data Is Retrieved From Service And Is Rendered", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: POKEMON_ENTITY_OBJECT,
    });

    (useRoute as Mock).mockReturnValue({ params: { id: MOCK_POKEMON_ID } });

    wrapper = mount(PokemonDetailsView);

    await flushPromises();

    expect(wrapper.text()).toContain(MOCK_POKEMON_NAME);
  });
});

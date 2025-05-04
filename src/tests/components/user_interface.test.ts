import { describe, test, expect, vi, type Mock } from "vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import HomeView from "@/views/home_view.vue";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "@/constants/pokemon_constants";
import axios from "axios";
import {
  FIRST_PAGE,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "@/constants/user_interface_constants";
import { useRoute } from "vue-router";
import PokemonDetailsView from "@/views/pokemon_details_view.vue";

vi.mock("axios");
vi.mock("vue-router", () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(),
}));

describe("Test Component User Interface", () => {
  let wrapper: VueWrapper;

  test("Test Pokemon Matrix Being Paginated", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    wrapper = mount(HomeView);

    await flushPromises();

    await wrapper.find(PAGINATION_NEXT_BUTTON_TEST_ID).trigger("click");

    try {
      wrapper.find(PAGINATION_NEXT_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }

    await wrapper.find(PAGINATION_PREVIOUS_BUTTON_TEST_ID).trigger("click");

    try {
      wrapper.find(PAGINATION_PREVIOUS_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }

    wrapper.find(PAGE_SELECTOR_TEST_ID).setValue(FIRST_PAGE + 1);

    try {
      wrapper.find(PAGINATION_NEXT_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test("Test Pokemon Being Searched By Its Name", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    wrapper = mount(HomeView);

    await flushPromises();

    await wrapper
      .find(POKEMON_NAME_SEARCHING_INPUT_TEST_ID)
      .setValue(MOCK_POKEMON_NAME);

    expect(wrapper.text()).toContain(MOCK_POKEMON_NAME);
  });

  test("Test Pokemon Details Being Shown", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: POKEMON_ENTITY_OBJECT,
    });

    (useRoute as Mock).mockReturnValue({ params: { id: MOCK_POKEMON_ID } });

    wrapper = mount(PokemonDetailsView);

    await flushPromises();

    expect(wrapper.text()).toContain(MOCK_POKEMON_NAME);
  });
});

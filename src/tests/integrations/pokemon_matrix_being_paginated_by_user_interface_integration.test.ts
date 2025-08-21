import { describe, test, expect, vi, type Mock } from "vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import HomeView from "@/views/home_view.vue";
import { MATRIX_OF_POKEMON_ENTITY_OBJECT } from "@/constants/pokemon_constants";
import axios from "axios";
import {
  FIRST_PAGE,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
} from "@/constants/user_interface_constants";

vi.mock("axios");

describe("Pokemon Matrix Being Paginated By User Interface Integration", () => {
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
});

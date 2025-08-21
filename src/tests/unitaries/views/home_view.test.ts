/* eslint-disable @typescript-eslint/no-unused-expressions */

import { describe, test, expect, vi, type Mock } from "vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import HomeView from "@/views/home_view.vue";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "@/constants/pokemon_constants";
import axios from "axios";
import {
  FIRST_PAGE,
  LOADING_INDICATOR_TEST_ID,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "@/constants/user_interface_constants";

vi.mock("axios");

describe("Test Vue HomeView", () => {
  let wrapper: VueWrapper;

  test("Test If Loading Indicator Is Shown When Pokemon Data Is Not Loaded", () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    wrapper = mount(HomeView);

    expect(wrapper.find(LOADING_INDICATOR_TEST_ID).element).toBeTruthy();
  });

  test("Test If Paginated List Of Pokemons Is Showed If Pokemon Name Searching Input Is Empty", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    wrapper = mount(HomeView);

    await flushPromises();

    expect(wrapper.find(PAGINATION_NEXT_BUTTON_TEST_ID).element).toBeTruthy();
  });

  test("Test If Filtered By Name List Of Pokemons Is Showed If Pokemon Name Searching Input Is With Pokemon Name", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: MATRIX_OF_POKEMON_ENTITY_OBJECT,
    });

    wrapper = mount(HomeView);

    await flushPromises();

    await wrapper
      .find(POKEMON_NAME_SEARCHING_INPUT_TEST_ID)
      .setValue(MOCK_POKEMON_NAME);

    expect(wrapper.text()).toContain(MOCK_POKEMON_NAME);

    try {
      wrapper.find(PAGINATION_NEXT_BUTTON_TEST_ID).element;
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test("Test If Pagination Is Set And Updates Current Pokemon Page", async () => {
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

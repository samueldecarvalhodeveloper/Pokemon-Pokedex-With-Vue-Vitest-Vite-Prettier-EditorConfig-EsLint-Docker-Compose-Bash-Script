import { describe, test, expect, vi, type Mock } from "vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import HomeView from "@/views/home_view.vue";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "@/constants/pokemon_constants";
import axios from "axios";
import { POKEMON_NAME_SEARCHING_INPUT_TEST_ID } from "@/constants/user_interface_constants";

vi.mock("axios");

describe("Pokemon Data Being Searched By Its Name By User Interface Integration", () => {
  let wrapper: VueWrapper;

  test("Test Pokemon Data Being Searched By Its Name", async () => {
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
});

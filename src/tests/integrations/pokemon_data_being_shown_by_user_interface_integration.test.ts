import { describe, test, expect, vi, type Mock } from "vitest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "@/constants/pokemon_constants";
import axios from "axios";
import { useRoute } from "vue-router";
import PokemonDetailsView from "@/views/pokemon_details_view.vue";

vi.mock("axios");
vi.mock("vue-router", () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(),
}));

describe("Pokemon Data Being Shown By User Interface Integration", () => {
  let wrapper: VueWrapper;

  test("Test Pokemon Data Being Shown", async () => {
    (axios.get as Mock).mockResolvedValueOnce({
      data: POKEMON_ENTITY_OBJECT,
    });

    (useRoute as Mock).mockReturnValue({ params: { id: MOCK_POKEMON_ID } });

    wrapper = mount(PokemonDetailsView);

    await flushPromises();

    expect(wrapper.text()).toContain(MOCK_POKEMON_NAME);
  });
});

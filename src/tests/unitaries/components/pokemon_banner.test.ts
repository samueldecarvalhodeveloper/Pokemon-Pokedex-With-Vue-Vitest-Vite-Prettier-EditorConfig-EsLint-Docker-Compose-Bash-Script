import { describe, beforeEach, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import PokemonBanner from "@/components/pokemon_banner.vue";

describe("Test Component PokemonBanner", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(PokemonBanner);
  });

  test("Test If Component Renders", () => {
    expect(wrapper.find("section").exists()).toBeTruthy();
  });
});

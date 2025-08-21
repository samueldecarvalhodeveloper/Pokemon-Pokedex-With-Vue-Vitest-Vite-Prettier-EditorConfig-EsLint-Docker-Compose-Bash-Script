import { describe, beforeEach, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import PokemonLogo from "@/components/pokemon_logo.vue";

describe("Test Component PokemonLogo", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(PokemonLogo);
  });

  test("Test If Component Renders", () => {
    expect(wrapper.find("svg").exists()).toBeTruthy();
  });
});

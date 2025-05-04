import { describe, beforeEach, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import LoadingIndicator from "@/components/loading_indicator.vue";

describe("Test Component LoadingIndicator", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(LoadingIndicator);
  });

  test("Test If Component Renders", () => {
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
});

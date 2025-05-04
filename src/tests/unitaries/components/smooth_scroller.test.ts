import { describe, beforeEach, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import SmoothScroller from "@/components/smooth_scroller.vue";

describe("Test Component SmoothScroller", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(SmoothScroller);
  });

  test("Test If Component Renders", () => {
    expect(wrapper.find("a").exists()).toBeTruthy();
  });
});

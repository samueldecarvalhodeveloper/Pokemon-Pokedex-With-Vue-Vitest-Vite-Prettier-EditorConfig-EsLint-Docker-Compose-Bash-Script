import { describe, beforeEach, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import NotFoundView from "@/views/not_found_view.vue";
import { NOT_FOUND_PAGE_INFORMATION_TEXT } from "@/constants/user_interface_constants";

describe("Test Vue NotFound", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(NotFoundView);
  });

  test("Test If Vue Renders", () => {
    expect(wrapper.text()).toContain(NOT_FOUND_PAGE_INFORMATION_TEXT);
  });
});

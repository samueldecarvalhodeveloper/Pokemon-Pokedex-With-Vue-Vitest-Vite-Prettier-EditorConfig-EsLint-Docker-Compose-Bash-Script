import { describe, test, expect } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import PagePagination from "@/components/page_pagination.vue";
import {
  FIRST_PAGE,
  PAGINATED_POKEMON_MATRIX,
  PAGINATION_NEXT_BUTTON_TEST_ID,
} from "@/constants/user_interface_constants";

describe("Test Component PagePagination", () => {
  let wrapper: VueWrapper;

  test("Test If Next Button Is Shown On Page Being Smaller Than Pages Limit And Dispatches On Click Event", async () => {
    let currentPage: number = FIRST_PAGE;

    wrapper = mount(PagePagination, {
      props: {
        currentPage: FIRST_PAGE,
        numberOfPages: PAGINATED_POKEMON_MATRIX,
        onPreviousButtonClick: () => {},
        onNextButtonClick: (updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        },
        onPagePaginationInputChange: () => {},
      },
    });

    await wrapper.find(PAGINATION_NEXT_BUTTON_TEST_ID).trigger("click");

    expect(currentPage).toEqual(FIRST_PAGE + 1);
  });

  test("Test If Previous Button Is Shown On Page Being Greater Than First Page And Dispatches On Click Event", async () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    wrapper = mount(PagePagination, {
      props: {
        currentPage: PAGINATED_POKEMON_MATRIX,
        numberOfPages: PAGINATED_POKEMON_MATRIX,
        onPreviousButtonClick: (updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        },
        onNextButtonClick: () => {},
        onPagePaginationInputChange: () => {},
      },
    });

    await wrapper.find("button").trigger("click");

    expect(currentPage).toEqual(PAGINATED_POKEMON_MATRIX - 1);
  });

  test("Test If Page Pagination Input Dispatches On Change Event", async () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    wrapper = mount(PagePagination, {
      props: {
        currentPage: PAGINATED_POKEMON_MATRIX,
        numberOfPages: PAGINATED_POKEMON_MATRIX,
        onPreviousButtonClick: () => {},
        onNextButtonClick: () => {},
        onPagePaginationInputChange: (updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        },
      },
    });

    await wrapper.find("input").setValue(FIRST_PAGE + 1);

    expect(currentPage).toEqual(FIRST_PAGE + 1);
  });

  test("Test If Page Pagination Input Places First Page Value If Value Is Smaller Than First Page", async () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    wrapper = mount(PagePagination, {
      props: {
        currentPage: PAGINATED_POKEMON_MATRIX,
        numberOfPages: PAGINATED_POKEMON_MATRIX,
        onPreviousButtonClick: () => {},
        onNextButtonClick: () => {},
        onPagePaginationInputChange: (updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        },
      },
    });

    await wrapper.find("input").setValue(FIRST_PAGE - 1);

    expect(currentPage).toEqual(FIRST_PAGE);
  });

  test("Test If Page Pagination Input Places Last Page Value If Value Is Greater Than Last Page", async () => {
    let currentPage: number = PAGINATED_POKEMON_MATRIX;

    wrapper = mount(PagePagination, {
      props: {
        currentPage: PAGINATED_POKEMON_MATRIX,
        numberOfPages: PAGINATED_POKEMON_MATRIX,
        onPreviousButtonClick: () => {},
        onNextButtonClick: () => {},
        onPagePaginationInputChange: (updatedCurrentPage: number) => {
          currentPage = updatedCurrentPage;
        },
      },
    });

    await wrapper.find("input").setValue(PAGINATED_POKEMON_MATRIX + 1);

    expect(currentPage).toEqual(PAGINATED_POKEMON_MATRIX);
  });
});

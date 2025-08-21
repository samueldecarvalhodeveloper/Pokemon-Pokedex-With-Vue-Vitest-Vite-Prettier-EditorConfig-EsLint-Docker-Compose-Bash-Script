<script setup lang="ts">
import { FIRST_PAGE } from "@/constants/user_interface_constants";
import {
  isPageGreaterThanTheFirstPage,
  isPageGreaterThanTheLastPage,
  isPageSmallerThanTheFirstPage,
  isPageSmallerThanTheLastPage,
} from "@/infrastructure/specifications/user_interface_specifications";

defineProps<{
  currentPage: number;
  numberOfPages: number;
  onPreviousButtonClick: (updatedCurrentPage: number) => void;
  onNextButtonClick: (updatedCurrentPage: number) => void;
  onPagePaginationInputChange: (updatedCurrentPage: number) => void;
}>();
</script>

<template>
  <div class="pagination">
    <div class="navigation_buttons">
      <button
        v-if="isPageGreaterThanTheFirstPage(currentPage)"
        data-testid="pagination_previous_button"
        @click="onPreviousButtonClick(currentPage - 1)">
        &lt; Previous
      </button>
      <button
        v-if="isPageSmallerThanTheLastPage(currentPage, numberOfPages)"
        data-testid="pagination_next_button"
        @click="onNextButtonClick(currentPage + 1)">
        Next &gt;
      </button>
    </div>
    <div class="page_selection">
      <input
        data-testid="page_selector"
        type="number"
        min="1"
        :value="currentPage"
        :max="numberOfPages"
        class="page_selector"
        @input="
          (event) => {
            let updatedCurrentPage = Number(
              (event.target as HTMLInputElement).value,
            );

            if (isPageSmallerThanTheFirstPage(updatedCurrentPage))
              updatedCurrentPage = FIRST_PAGE;
            if (isPageGreaterThanTheLastPage(updatedCurrentPage, numberOfPages))
              updatedCurrentPage = numberOfPages;

            onPagePaginationInputChange(updatedCurrentPage);
          }
        " />
      <h4 class="number_of_pages_label">of {{ numberOfPages }}</h4>
    </div>
  </div>
</template>

<style>
.pagination {
  display: flex;
  flex-flow: column nowrap;
  gap: 8rem;
}

.navigation_buttons {
  display: flex;
  gap: 8rem;
}

.navigation_buttons > button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16rem;
  font-weight: 900;
  background: #fff2f2;
  padding: 9rem;
  color: #0f0000;
  border-radius: 40rem;
  border: 1rem solid #0f0000;
  cursor: pointer;
}

.navigation_buttons > button:hover {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16rem;
  font-weight: 900;
  background: #0f0000;
  padding: 9rem;
  color: #fff2f2;
  border-radius: 40rem;
  border: 1rem solid #0f0000;
}

.page_selection {
  display: flex;
  gap: 8rem;
  justify-content: center;
  align-items: center;
}

.page_selector {
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16rem;
  background: #fff2f2;
  border-radius: 50rem;
  font-weight: 900;
  text-decoration: underline;
  border: 1rem solid #0f0000;
  text-decoration-color: #0f0000;
}

input[type="number"],
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0rem;
}

.number_of_pages_label {
  font-size: 14rem;
  color: #bfacac;
  font-weight: 900;
}
</style>

<template>
  <div
    class="indicator"
    data-testid="loading_indicator" />
</template>

<style>
.indicator {
  width: 100rem;
  height: 100rem;
  border: solid #0f0000;
  border-width: 8rem 0rem 0rem 0rem;
  border-radius: 100rem;
  animation: spin 2s linear infinite;
}
  
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>

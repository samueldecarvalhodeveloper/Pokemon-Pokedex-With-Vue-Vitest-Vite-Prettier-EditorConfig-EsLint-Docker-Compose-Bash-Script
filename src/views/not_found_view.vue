<template>
  <section class="not_found_page">
    <section class="content">
      <h1 class="title">Page 404: Not Found</h1>
      <a
        href="/"
        class="return_link">
        Back To Home ->
      </a>
    </section>
  </section>
</template>

<style>
.not_found_page {
  width: 100%;
  min-height: 100%;
  padding: 32rem 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  max-width: 404rem;
  background: #fff2f2;
  border: 1rem solid #bfacac;
  border-radius: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 32rem;
  padding: 32rem;
}

.title {
  color: #0f0000;
  font-size: 32rem;
  font-weight: 900;
  line-height: 150%;
  text-align: center;
}

.return_link {
  color: #0f0000;
  font-weight: 900;
  line-height: 150%;
  padding: 14rem;
}

.return_link:hover {
  color: #0f0000;
  font-weight: 900;
  line-height: 150%;
  padding: 14rem;
  text-decoration: none;
}
</style>

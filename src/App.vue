<template>
  <div id="app" class="body_wrapper">
    <header>
      <div class="wrapper header_wrapper">
        <Header></Header>
      </div>
    </header>
    <main>
      <div class="wrapper main_wrapper">
        <router-view />
      </div>
    </main>
    <footer>
      <div class="wrapper footer_wrapper">
        <Footer></Footer>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
</script>

<style lang="scss"></style>

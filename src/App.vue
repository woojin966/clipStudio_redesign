<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">홈</router-link>
        <router-link to="/features">기능</router-link>
        <router-link to="/pricing">구독</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>ⓒ CLIP STUDIO PAINT Redesign</footer>
  </div>
</template>

<script setup></script>

<style lang="scss">
body {
  background-color: $black; // 변수가 잘 먹히면 성공!
  color: $white;
}
</style>

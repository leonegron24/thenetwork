<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { computed } from 'vue';
import { AppState } from '@/AppState.js';

const theme = ref(loadState('theme') || 'light')
const account = computed(()=> AppState.account)

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-vue">
    <div class="container gap-2">

      <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
        <img class="navbar-brand  m-0" alt="logo" src="https://media.istockphoto.com/id/1996963853/photo/isolated-shot-of-three-dimensional-blank-jigsaw-puzzle-alphabet-letter-n-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=0Xv0JIDCtBxndmalkAKHQ3Dhhx-cTLjkx5LbMYvE6Uw=" height="45" />
        <b class="fs-5">etwork</b>
      </RouterLink>
      <RouterLink :to="{name: 'CreatePostPage'}">
        <div class="text-success mx-4">Create Post</div>
      </RouterLink>
      <!-- collapse button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="mdi mdi-menu text-light"></span>
    </button>
    <!-- collapsing menu -->
    <div class="collapse navbar-collapse d-flex" id="navbar-links">
      <div class="d-flex align-items-center flex-grow-1 justify-content-between">
        <form class="d-flex ms-auto" role="search">
          <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
    </div>

      <!-- LOGIN COMPONENT HERE -->
      <div class="ms-auto">
        <button class="btn text-light" @click="toggleTheme"
        :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
        <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
        <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
      </button>
    </div>
    <Login v-if="!account" />
  </div>
</div>
</nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.navbar-brand{
  height: 3em;
}
</style>

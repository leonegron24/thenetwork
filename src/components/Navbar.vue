<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { computed } from 'vue';
import { AppState } from '@/AppState.js';
import SerachBar from './SerachBar.vue';
import HomePageButton from './HomePageButton.vue';
import CreatePostButton from './CreatePostButton.vue';

const theme = ref(loadState('theme') || 'light')
const account = computed(()=> AppState.account)




watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })


</script>

<template>
  <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-vue">
    <div class="d-flex justify-content-between w-100 p-4 align-items-center">

      <HomePageButton />
      
      <CreatePostButton />

    <!-- collapsing menu -->
    <div class="collapse navbar-collapse d-flex" id="navbar-links">
      <div class="d-flex align-items-center flex-grow-1 justify-content-between">
        <SerachBar />
      </div>
      
      <!-- LOGIN COMPONENT HERE -->
      <div class="ms-auto">
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

@media (max-width: 768px){
  .hideLettersMobile{
    display: none;
  }
}
</style>

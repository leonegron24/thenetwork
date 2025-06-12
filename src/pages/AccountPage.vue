<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountForm from '@/components/AccountForm.vue';
import { AuthService } from '@/services/AuthService.js';


const account = computed(() => AppState.account)
function logout() {
  AuthService.logout()
}


</script>

<template>
  <div class="container p-4 about text-start">
    <div class="text-center">
      <img class="rounded" :src="account.picture" alt="" />
      <h1>{{ account.name }}</h1>
      <p>{{ account.email }}</p>
    </div>
    <div class="row align-items-center border p-4"  v-if="account">
      <div class="col-4 col-md-4">
        <div class="d-flex flex-column">
          <p>Graduated: {{ account.class }}</p>
          <a class="text-decoration-none" v-if="account.resume" :href="account.resume">Resume</a>
        </div>
      </div>
      <div class="col-4 col-md-4">
        <a v-if="account.github" :href="account.github" target="_blank" class="d-flex align-items-center gap-2 text-decoration-none">
        <i class="fs-3 mdi mdi-github"></i>
        <span class="fs-5">GitHub</span>
      </a>
    </div>
    <div class="col-4 col-md-4">
      <a v-if="account.linkedin" :href="account.linkedin" target="_blank" class="d-flex align-items-center gap-2 text-decoration-none">
        <i class="fs-3 mdi mdi-linkedin"></i>
        <span class="fs-5">LinkedIn</span>
      </a>
    </div>
  </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
  <div class="d-flex justify-content-center">

    <AccountForm />
  </div>
  <h3 class=" pt-4 text-center text-danger selectable" @click="logout">
  <i class="mdi mdi-logout"></i>
  logout
  </h3>
  

</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>

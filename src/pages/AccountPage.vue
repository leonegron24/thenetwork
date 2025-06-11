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
  <div class="about text-center">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
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

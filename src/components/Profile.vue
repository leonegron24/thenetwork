<script setup>
import { AppState } from '@/AppState.js';
import { AuthService } from '@/services/AuthService.js';
import { ref } from 'vue';
import { computed } from 'vue';

const account = computed(()=>AppState.account)

function logout() {
  AuthService.logout()
}
</script>


<template>
  <section v-if="account?.email" class="profile-section shadow p-4 profile-height">

        <RouterLink class="selectable text-decoration-none" :to="{ name: 'Account', params:{accountId: account.id} }">
        <div class="text-center">
          <div class="position-relative d-inline-block">
            <img class="profile-picture" :src="account.picture" alt="Profile picture"> 
            <i class="profile-icon mdi mdi-account-school-outline fs-6"></i>
          </div>
        </div>
        </RouterLink>
    <div class="text-center pt-4">
      <h2 class="pb-2">{{ account.name }}</h2>
    </div>
    <div class="d-flex flex-column">
      <a v-if="account.github" :href="account.github" target="_blank" class="d-flex align-items-center gap-2 text-decoration-none">
        <i class="fs-1 mdi mdi-github"></i>
        <span class="fs-5">GitHub</span>
      </a>
      <a v-if="account.linkedin" :href="account.linkedin" target="_blank" class="d-flex align-items-center gap-2 text-decoration-none">
        <i class="fs-1 mdi mdi-linkedin"></i>
        <span class="fs-5">LinkedIn</span>
      </a>
      <a v-if="account.resume" :href="account.resume" target="_blank" class="d-flex align-items-center gap-2 text-decoration-none">
       <i class="fs-1 mdi mdi-note-outline"></i>
       <span class="fs-5">Resume</span>
      </a>
      <div v-if="account.bio" :href="account.bio" target="_blank" class="displayBio d-flex align-items-center gap-2 text-decoration-none">
        <p>{{ account.bio }}</p>
      </div>
      <div v-if="account.class" :href="account.class" target="_blank" class="d-flex align-items-center gap-2 text-decoration-none">
        <p>{{ account.class }}</p>
      </div>   

    </div>

  </section>
</template>



<style scoped lang="scss">
.profile-picture {
  border-radius: 50%;
  height: 10em;
  width: 10em;
  object-fit: cover;
  object-position: center;
}

.profile-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2.5em;
  width: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 90%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.profile-height{
  height: 50em;
}

</style>

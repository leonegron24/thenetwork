<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';
import PostCard from './PostCard.vue';

const account = computed(() => AppState.profile);
const posts = computed(() => AppState.userPosts);
</script>

<template>
  <section v-if="account?.email" class="fw-bold text-white profile-section shadow p-4 profile-height position-relative overflow-hidden">
    <!-- Blurred background div -->
    <div class="background-blur" :style="{ backgroundImage: `url(${account.coverImg})` }"></div>

    <!-- Content container above blur -->
    <div class="position-relative text-center">
      <div class="position-relative d-inline-block">
        <img class="profile-picture" :src="account.picture" alt="Profile picture" />
        <i class="profile-icon mdi mdi-account-school-outline fs-6"></i>
      </div>

      <div class="pt-4">
        <h2 class="pb-2">{{ account.name }}</h2>
        <div v-if="account.class" class="gap-2 text-decoration-none">
          <p>Graduated: {{ account.class }}</p>
        </div>
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
        <div v-if="account.bio" class="border d-flex align-items-baseline gap-2 text-decoration-none">
          <h5>About Me:</h5>
          <div>{{ account.bio }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="container-fluid pt-4 bg-white">
    <div class="row p-4">
      <div v-for="post in posts" :key="post.id" class="col-6 col-md-6 mb-3">
        <PostCard :post="post" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profile-section {
  position: relative;
  overflow: hidden;
  height: 50em;
}

.background-blur {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  z-index: 0;
}

.position-relative {
  position: relative;
  z-index: 1;
}

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

a{
  color: blue;
}
</style>

<script setup >
import Example from '@/components/Example.vue';
import { postService } from '@/services/PostService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { AppState } from "@/AppState.js"
import { ref } from 'vue';
import PostCard from '@/components/PostCard.vue';
import Profile from '@/components/Profile.vue';
import Adds from '@/components/Adds.vue';

onMounted(()=>{
  getAllPosts()
})

const posts = computed(()=> AppState.posts)

async function getAllPosts(){
    try {
      const request = await postService.getAllPosts()
    }
    catch (error){
      Pop.error(error);
    }
}

</script>

<template>
  <main class="d-flex flex-row justify-content-between w-100">
    <!-- Profile Section -->
     <Profile />

    <!-- Posts Section -->
    <section class="posts-section p-4">
      <div v-for="post in posts" :key="post.id" class="mb-3">
        <PostCard :post="post" />
      </div>
    </section>

    <!-- Ads Section -->
    <Adds />
  </main>

  <!-- Page -->
    <div class="d-flex justify-content-center">
      <div class="btn selectable mx-5">...Newer </div>
      <div class="btn selectable mx-5">Older...</div>
    </div>
</template>


<style scoped lang="scss">
main {
  height: 100vh;
}

.profile-section {
  width: 25%;
  background-color: #f8f9fa;
}

.posts-section {
  width: 50%;
  background-color: #fff;
  overflow-y: auto;
}

.ads-section {
  width: 25%;
  background-color: #f1f3f5;
}
</style>


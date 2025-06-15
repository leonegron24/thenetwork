<script setup >
import Example from '@/components/Example.vue';
import { postService } from '@/services/PostService.js';
import { addService } from '@/services/AddService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { AppState } from "@/AppState.js"
import { ref } from 'vue';
import PostCard from '@/components/PostCard.vue';
import Profile from '@/components/Profile.vue';
import AddCard from '@/components/AddCard.vue';

onMounted(()=>{
  getAllPosts()
  getAdds()
})

const posts = computed(()=> AppState.posts)
const adds = computed(() => AppState.adds)

async function getAllPosts(){
    try {
      await postService.getAllPosts()
    }
    catch (error){
      Pop.error(error);
    }
}

async function changePage(x){
  try {
    await postService.changePage(x)
    window.scrollTo({ top: 0, behavior: 'instant' }) // 👈 Scrolls to top
  }
  catch (error){
    Pop.error(error);
  }
}

async function getAdds(){
  try {
    await addService.getAdds()
  }
  catch (error){
    Pop.error(error);
  }
}

</script>

<template>
  <main class="h-100 d-flex pageChange justify-content-between w-100">
    <!-- Profile Section -->
     
     <Profile />
     

    <!-- Posts Section -->
    <section class="posts-section p-4">
      <div v-for="post in posts" :key="post.id" class="mb-3">
        <PostCard :post="post"   @update-likes="(likeIds) => post.likeIds = likeIds" />
      </div>
    </section>

    <!-- Ads Section -->
     <section class="hideAddMobile ads-section">
      <div v-for="add in adds" :key="add.id">
        <AddCard :add="add" />
      </div>

     </section>

  </main>

  <!-- Page -->
    <div class=" pb-4 d-flex justify-content-center">
      <button :disabled="AppState.currentPage == AppState.firstPage" @click="changePage(-1)" class="btn selectable mx-5">...Previous </button>
      <button :disabled="AppState.disableButton"  @click="changePage(1)" class="btn selectable mx-5">Next...</button>
    </div>
</template>


<style scoped lang="scss">
main {
  height: 100vh;
}

.pageChange{
  flex-direction: row;
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
  background-color: #edeff0;
}

@media (max-width: 768px){
  .hideAddMobile{
    display: none !important
  }
  .posts-section {
    width: 100%;
    overflow-y: unset;
  }
  .ads-section{
    width: 100%;
  }
  .profile-section{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .pageChange{
    flex-direction: column;
  }
}

</style>


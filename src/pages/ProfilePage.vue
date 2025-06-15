<script setup>
import CreatePostButton from '@/components/CreatePostButton.vue';
import HomePageButton from '@/components/HomePageButton.vue';
import OthersProfile from '@/components/OthersProfile.vue';
import { accountService } from '@/services/AccountService.js';
import { postService } from '@/services/PostService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

onMounted(()=> {
  fetchPostProfile()
  getUserPostsById()
})


async function fetchPostProfile(){
    try {
      await accountService.fetchPostProfile(route.params.creatorId)
    }
    catch (error){
      Pop.error(error);
    }
}

async function getUserPostsById(){
  try {
    await postService.getUserPostsById(route.params.creatorId)
  }
  catch (error){
    Pop.error(error);
  }
}
</script>


<template>
    <header>
        <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-vue">
            <HomePageButton class="p-4" />
            <CreatePostButton />
        </nav>
    </header>

  <OthersProfile />
</template>


<style lang="scss" scoped>

</style>
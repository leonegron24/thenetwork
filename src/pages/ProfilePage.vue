<script setup>
import { AppState } from '@/AppState.js';
import OthersProfile from '@/components/OthersProfile.vue';
import { accountService } from '@/services/AccountService.js';
import { postService } from '@/services/PostService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const profile = computed(()=>AppState.profile)

onMounted(()=> {
  fetchPostProfile()
  getUserPostsById()
})


async function fetchPostProfile(){
    try {
      const request = await accountService.fetchPostProfile(route.params.creatorId)
    }
    catch (error){
      Pop.error(error);
    }
}

async function getUserPostsById(){
  try {
    const request = await postService.getUserPostsById(route.params.creatorId)
  }
  catch (error){
    Pop.error(error);
  }
}
</script>


<template>
<OthersProfile />
</template>


<style lang="scss" scoped>

</style>
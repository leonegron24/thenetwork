<script setup>
import { AppState } from '@/AppState.js';
import OthersProfile from '@/components/OthersProfile.vue';
import { accountService } from '@/services/AccountService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const profile = computed(()=>AppState.profile)

onMounted(()=> {
  fetchPostProfile()
})


async function fetchPostProfile(){
    try {
      const request = await accountService.fetchPostProfile(route.params.creatorId)
      console.log(route.params.creatorId)
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
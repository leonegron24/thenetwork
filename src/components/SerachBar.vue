<script setup>
import { postService } from '@/services/PostService.js';
import { ref } from 'vue';


const searchQuery = ref('')

async function searchPosts(){
  const request = await postService.searchPosts(searchQuery.value)
}
</script>


<template>
    <form @submit.prevent="searchPosts" class="d-flex ms-auto" role="search">
        <input v-model="searchQuery" class="form-control me-2" placeholder="Search..." >
        <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
</template>


<style lang="scss" scoped>

</style>
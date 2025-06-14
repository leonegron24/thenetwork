<script setup>
import { AppState } from '@/AppState.js';
import { Post } from '@/models/Post.js';
import { postService } from '@/services/PostService.js';
import { Pop } from '@/utils/Pop.js';

import { computed } from 'vue';


const props = defineProps({post: Post})
const emit = defineEmits(['update-likes'])

const account = computed(() => AppState.account)

const hasLiked = computed(() => {
  return props.post.likeIds.includes(account.value?.id)
})
const likesCount = computed(() => props.post.likeIds.length)



async function deletePost(postId){
    try {
      const request = await postService.deletePost(postId)
    }
    catch (error){
      Pop.error(error);
    }
}

async function likePost(postId) {
  try {
    const likeIds = await postService.likePost(postId)
    emit('update-likes', likeIds) // 🔥 tell the parent to update the likes
  } catch (error) {
    Pop.error(error)
  }
}

</script>


<template>
<div class="card shadow">
    <div class="d-flex justify-content-between p-2 align-items-center">
        <div class="fs text-secondary">Created: {{ post.createdAtFormatted }}</div>
        <button v-if="account?.id == post.creator.id" @click="deletePost(post.id)" class="btn btn-danger fs text-secondary">Delete Post</button>
    </div>
    <div class="p-4">
        <div class="d-flex justify-content-between mb-2">
            <div class="d-flex align-items-center">
                    <RouterLink :to="{ name: 'Profile', params:{creatorId: post.creator.id} }">
                        <img class="profile-picture" :src="post.creator.picture" alt="">
                    </RouterLink>
                    <div class="mx-2">
                        {{ post.creator.name}}
                    </div> 
            </div>

            <!-- Post Menu Button -->
            <div><i class="selectable btn mdi mdi-menu"></i></div>
        </div>
        <div>{{ post.body }}</div>
    </div>
    <div>
        <img class="img-fluid postImg" :src="post.imgUrl" alt="">
    </div>
    <div class="d-flex justify-content-end align-items-baseline">

        <!-- Like Button -->
         <button @click="likePost(post.id)" class="btn p-0">
            <i :class="hasLiked ? 'mdi mdi-heart' : 'mdi mdi-heart-plus-outline'"></i>
         </button>
        <div class="p-2">{{ likesCount }}</div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.card{
    min-height: 5em;
}
.profile-picture{
    border-radius: 50%;
    height: 50px;
    width: 50px;
    object-fit: cover;
    object-position: center;
}
.postImg{
    height: 20em;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.fs{
    font-size: x-small;
}
</style>
<script setup>
import { Post } from '@/models/Post.js';
import { ref } from 'vue';

const props = defineProps({post: Post})
const likes = ref((props.post.likes).length)
</script>


<template>
<div class="card shadow">

    <div class="p-4">
        <div class="d-flex justify-content-between mb-2">
            <div class="d-flex">
                <img class="rounded profile-picture" :src="post.creator.picture" alt="">
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
        <i class="selectable btn mdi mdi-heart"></i>
        <div class="p-2">{{ likes }}</div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.card{
    min-height: 5em;
}
.profile-picture{
    max-height: 30px;
    object-fit: cover;
    object-position: center;
}
.postImg{
    height: 20em;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
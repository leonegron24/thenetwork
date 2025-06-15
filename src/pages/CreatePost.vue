<script setup>
import HomePageButton from '@/components/HomePageButton.vue';
import PostForm from '@/components/PostForm.vue';


</script>


<template>
    <header>
        <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-vue">
            <HomePageButton class="p-4" />
            <CreatePostButton />
        </nav>
    </header>
    <h1 class="p-4">Create a Post!</h1>
    <PostForm />
</template>


<style lang="scss" scoped>

</style>
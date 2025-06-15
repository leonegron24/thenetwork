<script setup>
import { AppState } from '@/AppState.js';
import { postService } from '@/services/PostService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const postData = ref({
  imgUrl: '',
  body: ''
});

onMounted(() => {
  resize()
})

const text = ref('')
const autoResizeTextarea = ref(null)
const router = useRouter()

function resize() {
  const el = autoResizeTextarea.value
  if (el) {
    el.style.height = 'auto'        // Reset height
    el.style.height = el.scrollHeight + 'px'  // Set new height
  }
}

async function addPost(){
    try {
      const request = postService.addPost(postData.value)
      router.push({name: 'Home' })

    }
    catch (error){
      Pop.error(error);
    }
}
</script>


<template>
<form @submit.prevent="addPost" class="container form-control">
    <div class="row p-4">
        <label for="imgUrl">Post Image Url</label>
        <input class="form-control" placeholder="enter image url..." v-model="postData.imgUrl" type="url" id="imgUrl">
        <label for="body">Body</label>
        <textarea required class="pb-4 form-control" placeholder="describe your post..." v-model="postData.body" name="body" id="body"></textarea>
    </div>
    <button class="w-25 btn btn-success">Add Post</button>
</form>
</template>


<style lang="scss" scoped>
textarea {
  overflow: hidden;
  resize: none; /* Optional: disables manual resizing */
}
</style>
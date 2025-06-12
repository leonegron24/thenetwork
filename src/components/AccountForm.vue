<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, ref, watch } from 'vue';
import { onMounted } from 'vue'

onMounted(() => {
  resize()
})

const text = ref('')
const autoResizeTextarea = ref(null)

function resize() {
  const el = autoResizeTextarea.value
  if (el) {
    el.style.height = 'auto'        // Reset height
    el.style.height = el.scrollHeight + 'px'  // Set new height
  }
}

const accountInfo = computed(() => AppState.account);

const accountData = ref({
  email: '',
  name: '',
  picture: '',
  linkedin: '',
  resume: '',
  github: '',
  bio: '',
  class: '',
  coverImg: ''
});

watch(accountInfo, (newVal) => {
  if (newVal) {
    accountData.value = {
      email: newVal.email || '',
      name: newVal.name || '',
      picture: newVal.picture || '',
      linkedin: newVal.linkedin || '',
      resume: newVal.resume || '',
      github: newVal.github || '',
      class: newVal.class || '',
      bio: newVal.bio || '',
      coverImg: newVal.coverImg
    }
  }
}, { immediate: true });

async function editAccount(accountData){
    try {
        const request = await accountService.editAccount(accountData)
    }
    catch (error){
      Pop.error(error);
    }
}

</script>

<template>
  <form @submit.prevent="editAccount(accountData)" v-if="accountInfo?.email" class="form-control container w-75" action="">
    <div class="row">
      <div class="col-6 col-md-6">
        <label for="name">User Name</label>
        <input class="form-control" v-model="accountData.name" type="text" name="name" id="name" :required="true"/>
      </div>
      <div class="col-6 col-md-6">
        <label for="class">Graduation Date</label>
        <input class="form-control" v-model="accountData.class" type="text" name="class" id="class" />
      </div>
    </div>
    <label for="picture">Profile Picture Url</label>
    <input class="form-control" v-model="accountData.picture" type="text" name="picture" id="picture" />
    
    <label for="linkedin">LinkedIn Url</label>
    <input class="form-control" v-model="accountData.linkedin" type="text" name="linkedin" id="linkedin" />
    
    <label for="resume">Resume</label>
    <input class="form-control" v-model="accountData.resume" type="text" name="resume" id="resume" />
    
    <label for="github">GitHub Url</label>
    <input class="form-control" v-model="accountData.github" type="text" name="github" id="github" />

    <label for="bio">Bio</label>
    <textarea  @input="resize" rows="1" ref="autoResizeTextarea" v-model="accountData.bio" name="bio" id="bio" class="form-control form-height" maxlength="1000"></textarea>
    
    <div class="text-end">
      <button class="btn btn-success">Apply</button>
    </div>
  </form>
</template>



<style lang="scss" scoped>
  textarea {
  overflow: hidden;
  resize: none; /* Optional: disables manual resizing */
}
</style>
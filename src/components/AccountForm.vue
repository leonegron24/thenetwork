<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, ref, watch } from 'vue';

const accountInfo = computed(() => AppState.account);

const accountData = ref({
  email: '',
  name: '',
  picture: '',
  linkedin: '',
  resume: '',
  github: ''
});

watch(accountInfo, (newVal) => {
  if (newVal) {
    accountData.value = {
      email: newVal.email || '',
      name: newVal.name || '',
      picture: newVal.picture || '',
      linkedin: newVal.linkedin || '',
      resume: newVal.resume || '',
      github: newVal.github || ''
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
  <form @submit.prevent="editAccount(accountData)" v-if="accountInfo?.email" class="form-control w-75" action="">
    <label for="name">User Name</label>
    <input class="form-control w-25" v-model="accountData.name" type="text" name="name" id="name" />
    
    <label for="picture">Profile Picture Url</label>
    <input class="form-control" v-model="accountData.picture" type="text" name="picture" id="picture" />
    
    <label for="linkedin">LinkedIn Url</label>
    <input class="form-control" v-model="accountData.linkedin" type="text" name="linkedin" id="linkedin" />
    
    <label for="resume">Resume</label>
    <input class="form-control" v-model="accountData.resume" type="text" name="resume" id="resume" />
    
    <label for="github">GitHub Url</label>
    <input class="form-control" v-model="accountData.github" type="text" name="github" id="github" />
    
    <div class="text-end">
      <button class="btn btn-success">Apply</button>
    </div>
  </form>
</template>



<style lang="scss" scoped>

</style>
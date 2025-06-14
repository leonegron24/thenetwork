<script setup>
import { Add } from '@/models/Add.js';
import { addService } from '@/services/AddService.js';


const props = defineProps({add: Add})


</script>


<template>
    <section  class="selectable card shadow ads-section p-4 m-4">
      <div class="text-center">
        <div>{{add.title}}</div>
    </div>
      <div class="img-fluid">
        <img class="addImg" :src="add.square" alt="">
      </div>
      <div class="pt-2">
        <img class="addBanner" :src="add.banner" alt="">
      </div>
    </section>
</template>


<style lang="scss" scoped>

.addImg{
    height: 10em;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
}

.addBanner{
    height: 1.5em;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

</style>
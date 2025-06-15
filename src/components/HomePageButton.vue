<script setup>

</script>


<template>
        <RouterLink :to="{ name: 'Home' }" class="text-decoration-none">
            <img class="navbar-brand  m-0" alt="logo" src="https://media.istockphoto.com/id/1996963853/photo/isolated-shot-of-three-dimensional-blank-jigsaw-puzzle-alphabet-letter-n-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=0Xv0JIDCtBxndmalkAKHQ3Dhhx-cTLjkx5LbMYvE6Uw=" height="45" />
            <b class="hideLettersMobile fs-5 text-light">etwork</b>
        </RouterLink>

</template>


<style lang="scss" scoped>

.navbar-brand{
  height: 3em;
}

@media (max-width: 768px){
  .hideLettersMobile{
    display: none;
  }
}
</style>
<template>
  <header>
    <nav class="flex justify-between items-center px-[169px] h-16">
      <div class="flex h-12">
        <img src="../assets/images/winmas-logo.png" alt="Winmas Logo" class="flex-shrink-0 max-h-full max-w-full">
      </div>
      <div class="flex w-[776px] justify-between items-center font-semibold text-body2 font-roboto text-primary">
        <NuxtLink class="cursor-pointer text-center py-16 w-full hover:bg-secondary">Home</NuxtLink>
        <NuxtLink class="cursor-pointer text-center py-16 w-full hover:bg-secondary">Projects</NuxtLink>
        <NuxtLink class="cursor-pointer text-center py-16 w-full hover:bg-secondary">Services</NuxtLink>
        <NuxtLink class="cursor-pointer text-center py-16 w-full hover:bg-secondary">Gallery</NuxtLink>
        <NuxtLink class="cursor-pointer text-center py-16 w-full hover:bg-secondary">About</NuxtLink>
        <NuxtLink class="cursor-pointer text-center py-16 w-full hover:bg-secondary">Contact Us</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
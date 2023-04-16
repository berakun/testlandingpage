<template>
  <div class="container mx-auto py-10 grid grid-rows-1 grid-flow-col gap-4 flex space-x-[140px]">
    <div class="flex items-center">
      <img :src=gambar alt="Gambar" class="mr-4 w-48 h-48">
      <p class="text-lg italic">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>
        - Lorem Ipsum
      </p>
    </div>
    <div class="flex items-center">
      <img :src=gambar alt="Gambar" class="mr-4 w-48 h-48">
      <p class="text-lg italic">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>
        - Lorem Ipsum
      </p>
    </div>
  </div>
</template>

<script>
import gambar from '../assets/gambar/2.jpg';

export default {
  data() {
    return {
      gambar: gambar
    }
  }
}

</script>

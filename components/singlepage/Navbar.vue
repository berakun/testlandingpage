<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img class="hidden lg:block h-8 w-auto" :src="wa" alt="Logo" />
        </div>

        <!-- Menu -->
        <div class="flex flex-wrap items-center justify-between mx-2 logo">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <img class="text-white" :src="fb" alt="Logo Facebook" />
              </a>
              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <img class="text-white" :src="ig" alt="Logo Instagram" />
              </a>
              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <img class="text-white" :src="linkedin" alt="Logo Linkedin" />
              </a>
              <a href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <img class="text-white" :src="wa" alt="Logo Whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import fb from '../assets/icon/fb.svg';
import ig from '../assets/icon/ig.svg';
import linkedin from '../assets/icon/linkedin.svg';
import wa from '../assets/icon/wa.svg';

export default {
  data() {
    return {
      fb: fb,
      ig: ig,
      linkedin: linkedin,
      wa: wa
    }
  }
}
</script>

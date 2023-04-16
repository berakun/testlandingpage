<template>
  <div class="container mx-auto py-10">
    <carousel :perPage="4" :navigationEnabled="true" :paginationEnabled="false" ref="carousel">
      <slide v-for="item in items" :key="item.id">
        <div class="carousel-item">
          <img :src="item.image" :alt="item.name">
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import gambar from '../assets/gambar/1.jpg';

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Gambar 1', image: gambar },
        { id: 2, name: 'Gambar 2', image: gambar },
        { id: 3, name: 'Gambar 3', image: gambar },
        { id: 4, name: 'Gambar 4', image: gambar },
        { id: 5, name: 'Gambar 5', image: gambar },
        { id: 6, name: 'Gambar 6', image: gambar }
      ]
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    }
  }
}
</script>

<style scoped>
.carousel-nav button:hover {
  background-color: #eee;
}
</style>

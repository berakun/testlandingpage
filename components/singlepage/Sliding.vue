<!-- <template>
  <div class="w-screen py-8 px-8">

    <div class="carousel">
      <vue-slick-carousel :options="slickOptions">
        <div v-for="(item, index) in items" :key="index">
          <img :src="item.image" alt="carousel item" />
        </div>
      </vue-slick-carousel>
    </div>

  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      items: [
        {
          image: '../assets/gambar/1.jpg'
        },
        {
          image: '../assets/gambar/2.jpg'
        },
        {
          image: '../assets/gambar/3.jpg'
        }
      ],
      slickOptions: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        speed: 500,
        variableWidth: true
      }
    }
  }
}
</script> -->

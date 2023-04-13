<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <SinglePage />
    </div>
    <div>
      <Tutorial />
    </div>
  </div>
</template>

<script>
import Tutorial from '../components/singlepage/Tutorial.vue';
import SinglePage from '../components/singlepage/SinglePage.vue';
import Navbar from '../components/singlepage/Navbar.vue';

export default {
  name: "IndexPage",
  components: { Navbar, SinglePage, Tutorial }
}
</script>

<template>
  <div>
    <div>
      <SinglepageNavbar />
    </div>
    <div>
      <SinglepageSinglePage />
    </div>
    <hr class="container mx-auto bg-gray-100" style="border-top: 1px solid #bbb">
    <div>
      <SinglepageSliding />
    </div>
    <hr class="container mx-auto bg-gray-100" style="border-top: 1px solid #bbb">
    <div>
      <SinglepageFeaturePage />
    </div>
    <hr class="container mx-auto bg-gray-100" style="border-top: 1px solid #bbb">
    <div>
      <SinglepageTestiPage />
    </div>
    <div>
      <SinglepageBottomNavbar />
    </div>
  </div>
</template>

<script>



export default {
  name: "IndexPage"
}
</script>

<template>
  <div class="bg-gray-100 w-full">
    <div class="py-20">
      <div class="">
        <div class="-mt-12 pb-4">
          <h1 class="text-4xl text-yellow-500 font-bold text-center capitalize">
            explore Top Destination
          </h1>
          <p class="text-gray-700 text-center py-4 text-lg">
            We provide top places, cities around the world where you can tour
            and enyoy  together with your family,<br> choose <span class="text-yellow-500 font-bold"> TravelHut</span> today and make your touring dream come true.
          </p>
        </div>
        <div class="">
          <Services />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import Services from "../Services.vue";
export default {
  data() {
    return {
      // location_image: [],
    };
  },
  components: {
    Services,
  },
  // computed: {
  // ...mapGetters(["countryList"]),
  // },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Hind:wght@300&family=Noto+Serif:ital@0;1&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
.text-yellow-500, .text-gray-700 {
  font-family: "Noto Serif", serif;
  font-style: italic;
}
</style>

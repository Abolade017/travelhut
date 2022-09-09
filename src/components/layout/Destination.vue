<template>
  <div class="md:px-0  px-10 w-full">
    <div class=" py-10 md:py-20">
      <div class="">
        <div class=" mt-0 md:-mt-12 pb-4">
          <h1 class="text-3xl md:text-4xl text-yellow-500 font-bold text-center capitalize">
            explore Top Destination
          </h1>
          <p class="text-gray-700 text-center py-4 text-base md:text-lg">
            We provide top places, cities around the world where you can tour
            and enyoy  together with your family,<br> choose <span class="text-yellow-500 font-bold"> TravelHut</span> today and make your touring dream come true.
          </p>
        </div>
        <div class="">
          <DestinationList />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import DestinationList from "../DestinationList.vue";
export default {
  data() {
    return {
      // location_image: [],
    };
  },
  components: {
    DestinationList,
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

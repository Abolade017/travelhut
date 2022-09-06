<template>
  <div class="bg-gray-100 w-full">
    <div class="py-20">
      <div class="">
        <h1 class="text-4xl text-yellow-500 font-bold text-center">
          Our Services
        </h1>
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

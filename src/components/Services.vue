<template>
  <div class="flex flex-wrap justify-center px-20">
    <div
      class="py-10 w-1/2 md:w-1/3"
      v-for="country in countryList"
      :key="country.id"
    >
      <img
        :src="country.photo"
        alt=""
        class="px-3 h-full w-full transition-transform duration-300 transform bg-dark-200 focus:scale-105 hover:scale-105"
        style="height: 300px; border-radius: 25px"
        @click="this.$router.push({ path: `/our-services/${country.id}` })"
      />
      <div class="pl-3 pt-2">
        <p class="text-lg">{{ country.name }}</p>
        <div class="flex">
          <font-awesome-icon
            icon="fa-solid fa-star"
            class="text-yellow-500"
            v-for="(n, index) in country.reviewStar / 2"
            :key="index"
          />
          <svg
            v-for="(n, index) in 5 - country.reviewStar / 2"
            :key="index"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5 text-yellow-500 star"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["location", "rate"],
  data() {
    return {};
  },
  mounted() {
    this.reviewStar;
  },
  computed: {
    ...mapGetters(["countryList"]),
  },
};
</script>
<style scoped></style>

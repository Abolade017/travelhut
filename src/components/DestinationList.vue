<template>
  <div class="flex flex-wrap w-full md:px-20">
    <div
      class="md:py-20 w-1/2 md:w-1/3 md:px-5"
      v-for="country in countryList"
      :key="country.id"
    >
      <div class="relative md:pt-0 pt-8">
        <img
          :src="country.photo"
          alt=""
          class="md:rounded-3xl w-full h-20 px-2 md:h-full md:w-full transition-transform duration-300 transform bg-dark-200 focus:scale-105 hover:scale-105"
          style="height: 300px"
          @click="this.$router.push({ path: `/destination/${country.id}` })"
        />
        <p
          class="absolute text-sm md:text-lg text-yellow-500 font-bold bg-white rounded-md w-10 h-6 md:h-10 md:w-20 top-10 md:top-6 right-4 md:right-6 py-1 text-center"
        >
          ${{ country.price }}
        </p>
        <div class="px-3 pt-2 pb-2">
          <div class="flex justify-between pb-2">
            <p class="md:text-lg text-sm font-semibold">{{ country.name }}</p>
            <div class="md:flex hidden">
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
            <div class="md:hidden text-sm">
              {{ country.reviewStar / 2
              }}<font-awesome-icon
                icon="fa-solid fa-star"
                class="text-yellow-500 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pt-2 flex justify-between px-2">
        <DetailButton
          @show-details="
            this.$router.push({ path: `/destination/${country.id}` })
          "
          class="md:flex hidden md:h-10 md:w-24 h-8 w-16 md:text-base text-xs md:py-2 md:px-3"
        />
        <Button
          class="md:hidden flex bg-yellow-500 text-white md:text-base text-xs text-center md:p-0 p-3 font-bold h-12 w-20 md:w-24 rounded-md hover:opacity-90"
          >Book now</Button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DetailButton from "./DetailButton.vue";
import Button from "./Button.vue";
export default {
  components: {
    DetailButton,
    Button,
  },
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
  methods: {},
};
</script>
<style scoped>
@media only screen and (max-width: 568px) {
  img {
    height: 300px;
  }
}
/* img{
    height: 200px;
  } */
</style>

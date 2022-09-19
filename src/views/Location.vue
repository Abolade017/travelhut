<template>
  <div>
    <div class="">
      <MobileNavbar class="md:hidden block" />
      <Navbar class="md:block hidden" />
      <div>
        <img :src="country.photo" alt="" />
      </div>
      <div class="flex py-10 md:px-20 px-10 space-x-10 md:space-x-20">
        <p class="">{{ country.details }}</p>
        <div>
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
          <div class="text-gray-700 font-bold pt-2">${{ country.price }}</div>
        </div>
      </div>
      <div class="md:px-20 px-6">
        <div class="pt-10 pb-24">
          <h1 class="text-center text-xl md:text-4xl font-bold text-gray-700">
            Customer's Review
          </h1>
          <div
            class="flex md:flex-row flex-col space-y-6 md:space-y-0 md:justify-between justify-center md:space-x-10 space-x-0 pt-10"
          >
            <div
              class="md:w-96 rounded-md border border-yellow-500 py-10 px-6"
              v-for="i in country.review"
              :key="i"
            >
              <div class="flex space-x-4 flex-shrink-0">
                <div>
                  <img
                    src="../assets/images/tour-manager.jpg"
                    alt="user"
                    class="rounded-full w-12 h-12"
                  />
                </div>
                <div class="font-semibold text-lg capitalize">{{ i.name }}</div>
              </div>
              <div class="py-2 text-center">{{ i.comment }}</div>
              <div class="flex justify-center">
                <font-awesome-icon
                  icon="fa-solid fa-star"
                  class="text-yellow-500"
                  v-for="(n, index) in i.rating / 2"
                  :key="index"
                />
                <svg
                  v-for="(n, index) in 5 - i.rating / 2"
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
      </div>
      <MobileFooter class="md:hidden block" />
      <Footer class="md:block hidden" />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer";
import MobileNavbar from "../components/layout/MobileNavbar.vue";
import MobileFooter from "../components/layout/MobileFooter.vue";
import CustomersReview from "../components/layout/CustomersReview.vue";
export default {
  prop: ["image"],
  components: {
    Navbar,
    Footer,
    MobileNavbar,
    MobileFooter,
    CustomersReview,
  },
  data() {
    return {
      //   api_key: "26585d44eef5462f9ad6e3a1fdea5e90",
      //   location: [],
    };
  },
  computed: {
    country() {
      return this.$store.getters.getCurrentCountry;
    },
  },
  mounted() {
    this.$store.commit("SET_CURRENT_LOCATION_ID", this.$route.params.id);
  },
  methods: {
    // getLocation() {
    //   fetch(
    //     `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${this.api_key}    `  )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.location = data;
    //     });
    // },
  },
};
</script>

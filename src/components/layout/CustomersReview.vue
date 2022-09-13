<template>
  <div class="md:px-20 px-6">
    <div class="pt-10 pb-24">
      <h1 class="text-center text-xl md:text-4xl font-bold text-gray-700">
        Customer's Review
      </h1>
      <div class="flex md:flex-row flex-col space-y-6 md:space-y-0 md:justify-between justify-center pt-10">
        <div
          class=" md:w-96 rounded-md border border-yellow-500 py-10 px-6"
          v-for="i in getCustomerReview"
          :key="i.id"
        >
          <div class="flex space-x-4 flex-shrink-0">
            <div>
              <img
                src="../../assets/images/tour-manager.jpg"
                alt="user"
                class="rounded-full w-12 h-12"
              />
            </div>
            <div class="font-semibold text-lg">{{ i.name }}</div>
          </div>
          <div class="py-2 text-center">{{ i.comment }}</div>
          <div class="text-center">
            <font-awesome-icon
              icon="fa-solid fa-star"
              class="text-yellow-500"
              v-for="(n, index) in i.rate / 2"
              :key="index"
            />
            <svg
              v-for="(n, index) in 5 - i.rate / 2"
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
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCustomerReview"]),
  },
};
</script>

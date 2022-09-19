<template>
  <div class="bg-yellow-500 px-3 py-10">
    <div class="flex flex-col">
      <div class="pt-0">
        <img
          src="../../assets/images/travelhut-logo-removebg-preview.png"
          alt=""
          class="mb-2 h-10 w-20"
        />
        <div class="text-white pt-2 text-base">
          TravelHut enable that your comfort <br />
          and enjoyment is our top priority.
        </div>
      </div>

      <div class="flex justify-between pt-6">
        <div class="">
          <h1 class="text-base font-bold text-white explore">Our Services</h1>
          <div v-for="i in services" :key="i" class="pt-2">
            <div class="pt-1 text-white capitalize text-base md:text-lg text">
              <router-link :to="i.path"> {{ i.text }}</router-link>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-base font-bold text-white explore">About</h1>
          <div v-for="i in about" :key="i" class="pt-2">
            <div class="pt-1 text-white capitalize text-base md:text-lg text">
              <router-link :to="i.path">{{ i.text }}</router-link>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-base font-bold text-white explore">Helps</h1>
          <div v-for="i in helps" :key="i" class="pt-2">
            <div class="pt-1 text-white capitalize text-base md:text-lg">
              <router-link :to="i.path"> {{ i.text }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <router-link to="/" class="flex flex-row space-x-6"
          ><font-awesome-icon
            :icon="i.text"
            class="text-white pt-12"
            v-for="i in travelHut"
            :key="i"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about: [
        { id: 1, text: "our story", path: "/our-story" },
        { id: 1, text: "teams", path: "/teams" },
        { id: 1, text: "benefit", path: "/benefit" },
        { id: 1, text: "Careers", path: "/careers" },
      ],
      services: [
        { id: 1, text: "travelling", path: "/destination" },
        { id: 1, text: "cab service", path: "/cab-service" },
        { id: 1, text: "Hotel booking", path: "/hotel-booking" },
        { id: 1, text: "ticket booking", path: "/ticket-booking" },
      ],
      helps: [
        { id: 1, text: "FAQs", path: "/faqs" },
        { id: 1, text: "contact us", path: "/contact" },
      ],
    };
  },

  computed: {
    travelHut() {
      return this.$store.state.travelHut;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Hind:wght@300&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
.explore {
  font-family: "Noto Serif", serif;
}
.text {
  font-family: "Hind", sans-serif;
}
</style>

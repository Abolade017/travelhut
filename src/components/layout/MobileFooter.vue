<template>
  <div class="bg-yellow-500  px-3 py-10">
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
              {{ i.text }}
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-base font-bold text-white explore">About</h1>
          <div v-for="i in about" :key="i" class="pt-2">
            <div class="pt-1 text-white capitalize text-base md:text-lg text">
              {{ i.text }}
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-base font-bold text-white explore">Helps</h1>
          <div v-for="i in helps" :key="i" class="pt-2">
            <div class="pt-1 text-white capitalize text-base md:text-lg">
              {{ i.text }}
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
        { id: 1, text: "our story" },
        { id: 1, text: "teams" },
        { id: 1, text: "benefit" },
        { id: 1, text: "Careers" },
      ],
      services: [
        { id: 1, text: "travelling" },
        { id: 1, text: "cab service" },
        { id: 1, text: "hotel booking" },
        { id: 1, text: "ticket booking" },
      ],
      helps: [
        { id: 1, text: "FAQs" },
        { id: 1, text: "contact us" },
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
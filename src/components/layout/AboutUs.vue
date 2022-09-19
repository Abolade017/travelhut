<template>
  <div class="md:px-0 pr-10">
    <div class="pb-20 md:pt-0 pt-4 ">
      <h1
        class="text-center font-bold text-3xl md:text-4xl pt-6 pb-10 md:pb-20"
      >
        About Us
      </h1>
      <div
        class="md:flex-row flex-col flex justify-start md:justify-between md:space-x-24 space-x-0"
      >
        <div class="md:w-1/3 w-full">
          <h1 class="big-world text-xl md:text-2xl font-bold capitalize pb-6">
            it's a big world out <br />there, go explore
          </h1>
          <p>
            let's plan your destination here, we offer <br />
            the best destination every week
          </p>

          <slot name="Sports"></slot>
          <!-- <OurTeam /> -->
        </div>
        <div class="md:w-2/3 w-full">
          <p class="">
            <span class="about text-sm md:text-xl font-bold text-yellow-500">
              TravelHut</span
            >, a travelling and touring firm that provides satisfactory 
            and comfortable services for you. we make sure that our utmost
            priority is to make
            your dream comes through, we give the best, 
            we provide travelling and touring to great cities 
            around the world we offer hotel booking,cab services and ticket booking 
            to our touring packages based on your preferences 
            we take care of your safety, because its also 
            our priority to make sure that you are safe. 

          </p>
          <div class="pt-6">
            <Button
            @join="$router.push('about')"
              class="bg-yellow-500 text-white font-bold w-24 h-10 rounded-md text-center"
              >Read More</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OurTeam from "../OurTeam.vue";
import Button from "../Button";
export default {
  data(){
    return {
      readMore:false
    }
  },
  computed: {
    travelHut() {
      return this.$store.state.travelHut;
    },
  },
  components: { OurTeam, Button },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Hind:wght@300&family=Noto+Serif:ital@0;1&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
.big-world,
.about {
  font-family: "Noto Serif", serif;
  font-style: italic;
}
</style>

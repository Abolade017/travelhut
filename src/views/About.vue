<template>
  <div class="about">
    <Navbar />
    <div class="p-20">
      <div class="md:flex-row flex-col flex justify-start md:justify-between md:space-x-24 space-x-0">
        <div>
          <h1 class="big-world text-xl md:text-2xl font-bold capitalize pb-6">
            it's a big world out <br />there, go explore
          </h1>
          <p>let's plan your destination here, we offer <br> the best destination every week</p>

          <slot name="Sports"></slot>
          <OurTeam />
        </div>
        <div>
          <p class="">
            <span class="about text-base md:text-xl font-bold text-yellow-500"> TravelHut</span>,
            a travelling and touring firm that provides satisfactory <br />
            and comfortable services for you. we make sure that our utmost
            priority is to make <br />
            your dream comes through, we give the best, <br />
            we provide travelling and touring to great cities <br />
            around the world we offer different sports like <br />
            kayaking, camping, surfing, traking, and many more <br />
            to our touring packages based on your preferences <br />
            we take care of your safety, because its also <br />
            our priority to make sure that you are safe. <br />
            Necessitatibus veritatis atque neque maxime voluptatem ratione sit
            <br />
            libero porro consequatur nobis vitae eius fuga sequi dolorum facere
            <br />
            autem, nesciunt cum! Doloribus!
          </p>
          <div class="pt-6">
            <Button  class="bg-yellow-500 text-white font-bold h-8 w-24 rounded-md hover:opacity-90">Read More</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200">
      <h1
        class="package text-3xl font-bold text-yellow-500 text-center pt-8 pb-4"
      >
        Our Touring Package
      </h1>
      <div class="flex justify-between px-20 py-10">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="selected = tab"
          class="text-lg font-bold border-gray-300 rounded-md h-8 md:h-12 md:w-48 w-16"
          :class="['tab-btn', { active: selected === tab }]"
        >
          {{ tab }}
        </button>
      </div>
        <KeepAlive>
          <component :is="selected"></component>
        </KeepAlive>
    
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import AboutUs from "../components/layout/AboutUs.vue";
import Classic from "../components/tabs/Classic";
import Standard from "../components/tabs/Standard";
import Premium from "../components/tabs/Premium";
export default {
  components: {
    Navbar,
    Footer,
    AboutUs,
    Classic,
    Standard,
    Premium
  },
  data() {
    return {
      selected:'Classic',
      tabs: ["Classic", "Standard", "Premium"],
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Hind:wght@300&family=Noto+Serif:ital@0;1&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
.package {
  font-family: "Noto Serif", serif;
  font-style: italic;
}
.active {
  border-bottom: 3px solid orange;
  background-color: #fcfcfc;
}
</style>

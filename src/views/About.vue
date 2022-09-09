<template>
  <div class="about">
    <Navbar />
    <AboutUs class="px-20" />
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

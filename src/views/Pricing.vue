<template>
  <div class="">
    <MobileNavbar />
    <Navbar />
    <div
      class="md:flex-row flex-col space-y-4 md:space-y-0 flex justify-center  md:justify-between md:pl-0 pl-14 md:px-20"
    >
      <div class="classic">
        <Classic
          ><h1 class="text-2xl font-bold text-center text-yellow-500 pt-4">
            Classic
          </h1></Classic
        >
      </div>
      <div class="standard">
        <Standard
          ><h1 class="text-2xl font-bold text-center text-yellow-500 pt-4">
            Standard
          </h1></Standard
        >
      </div>
      <div class="premium">
        <Premium
          ><h1 class="text-2xl font-bold text-center text-yellow-500 pt-4">
            Premium
          </h1></Premium
        >
      </div>
    </div>
    <div></div>
    <Footer class="md:block hidden"  />
    <MobileFooter class=" block md:hidden" />
  </div>
</template>
<script>
    import MobileNavbar from "../components/layout/MobileNavbar.vue";
import Navbar from "../components/layout/Navbar.vue";
import Classic from "../components/tabs/Classic.vue";
import Standard from "../components/tabs/Standard.vue";
import Premium from "../components/tabs/Premium.vue";
import Footer from "../components/layout/Footer.vue";
import MobileFooter from "../components/layout/MobileFooter.vue";
export default {
  components: {
    Classic,
    Standard,
    Premium,
    MobileNavbar,
    Navbar,
    Footer,
    MobileFooter
},
  data() {
    return {};
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Hind:wght@300&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
h1 .text-2xl {
  font-family: "Noto Serif", serif;
}
</style>

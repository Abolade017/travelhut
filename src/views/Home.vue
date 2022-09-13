<template>
  <div>
    <MobileNavbar />
    <NavBar />
    <div class="md:relative">
      <div class="md:flex-row flex flex-col px-0 items-center md:px-20">
        <h1
          class="capitalize text-4xl md:text-6xl font-bold mt-20 text-gray-800 opacity-90 pl-0"
          id="explore"
        >
          <span class="text-yellow-500 opacity-85"> Explore</span> Your World
        </h1>
      </div>
      <div class="absolute md:right-24 md:top-16 bottom-10">
        <img
          src="../assets/images/beach-removebg-preview.png"
          alt="travel-palm-image"
          class="h-96 w-96"
        />
      </div>
    </div>
    <div class="px-0 md:px-20 md:py-2 -py-1">
      <p class="text-lg text-gray-900 opacity-80 capitalize font-semibold">
        A new way of travel <br />
        experience
      </p>
      <div class="md:my-24 my-8">
        <Button
          class="bg-yellow-500 text-white font-bold w-24 h-8 rounded-md text-center"
          @join="isModalboxVisible = true"
          >join now</Button
        >
        <modal-box
          v-show="isModalboxVisible"
          @close="isModalboxVisible = false"
        >
          <template v-slot:body>
            <SubscriberForm />
          </template>
          <template v-slot:footer>
            <div class="mt-4 absolute bottom-10 left-10 right-10"></div>
          </template>
        </modal-box>
      </div>
      <div>
        <p class="text-lg text-gray-600 md:pt-0 pt-56">what exiest you most?</p>
      </div>
      <div class="my-24">
        <about-Us>
          <template v-slot:Sports>
            <!-- <Sports /> -->
          </template>
        </about-Us>
      </div>
    </div>

    <Services />
    <Destination />
    <SubscriberForm />
    <CustomersReview />
    <Footer class="hidden md:block" />
    <MobileFooter class="md:hidden block" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MobileNavbar from "../components/layout/MobileNavbar.vue";
import NavBar from "@/components/layout/Navbar.vue";
import Sports from "@/components/layout/Sports.vue";
import Button from "@/components/Button.vue";
import Footer from "../components/layout/Footer.vue";
import Destination from "../components/layout/Destination.vue";
import AboutUs from "../components/layout/AboutUs.vue";
import ModalBox from "../components/layout/ModalBox.vue";
import SubscriberForm from "../components/SubscriberForm";
import Services from "../components/layout/Services";
import CustomersReview from "../components/layout/CustomersReview.vue";
import MobileFooter from "../components/layout/MobileFooter.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    MobileNavbar,
    NavBar,
    Button,
    Sports,
    Footer,
    Destination,
    AboutUs,
    ModalBox,
    SubscriberForm,
    Services,
    CustomersReview,
    MobileFooter,
  },
  data() {
    return {
      isModalboxVisible: false,
    };
  },
  methods: {
    gotoAboutPage() {
      return this.$router.push({ path: "/about" });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
#explore {
  font-family: "Noto Serif", serif;
}
</style>

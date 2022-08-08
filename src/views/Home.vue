<template>
  <div class="home px-20">
    <NavBar />
    <div class="relative">
    <div class="flex items-center px-20">
      <h1
        class="capitalize text-6xl font-bold mt-20 text-gray-800 opacity-90"
        id="explore"
      >
        <span class="text-yellow-500 opacity-85"> Explore</span> Your World
      </h1>
    </div>
    <div class="absolute right-48">
<img src="../assets/images/beach-removebg-preview.png" alt="travel-palm-image" class=" h-96 w-96">
    </div>
    </div>
    <div class="px-20 py-2">
      <p class="text-lg text-gray-900 opacity-80 capitalize font-semibold">
        A new way of travel <br />
        experience
      </p>
      <div class="my-24 flex space-x-10 items-center">
       <Button class=" bg-yellow-500 text-white font-bold ">join now</Button>
       <Button class="border-2 border-yellow-500">Watch video</Button>
       </div>
       <div>
        <p class="text-lg text-gray-600 ">what exiest you most?</p>
       </div>
       <div class="my-24">
        <Sports />
       </div>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/layout/Navbar.vue";
import Sports from "@/components/layout/Sports.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NavBar,
    Button,
    Sports,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
#explore {
  font-family: "Noto Serif", serif;
}
</style>

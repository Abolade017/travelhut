<template>
  <div class="">
    <div class="pb-20">
      <h1 class="text-center font-bold text-4xl pt-6 pb-20">About Us</h1>
      <div class="flex justify-between space-x-24">
        <div>
          <h1 class="text-2xl font-bold capitalize pb-6">
            it's a big world out <br />there, go explore
          </h1>
          <slot name="Sports"></slot>
          <OurTeam />
        </div>
        <div>
          <p class="text-xl">
            <span class="text-2xl font-bold text-yellow-500"> TravelHut</span>,
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
        
          <div class=" pt-6">
            <h1 class="font-bold text-lg text-gray-700">Follow us:</h1>
            <router-link to="/" class="flex flex-row space-x-6"
              ><font-awesome-icon
                :icon="i.text"
                class="text-2xl text-yellow-500 pt-4 hover:opacity-80"
                v-for="i in travelHut"
                :key="i"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OurTeam from "../OurTeam.vue";
export default {
    computed: {
        travelHut() {
            return this.$store.state.travelHut;
        },
    },
    components: { OurTeam }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Hind:wght@300&family=Noto+Serif:ital@0;1&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
.font-bold,
.text-xl {
  font-family: "Noto Serif", serif;
  font-style: italic;
}
</style>

<template>
  <div class="bg-yellow-50" id="bg">
    <h1 class="text-center font-bold text-gray-700 opacity-90 pt-6 text-3xl">
      Our Services
    </h1>
    <div class=" md:pt-0 pt-6  px-10 md:flex-row flex-col flex md:p-20 md:justify-between justify-start space-y-6 md:space-y-0">
      <div class="bg-white rounded-md h-72 w-auto md:w-96" v-for="i in services" :key="i">
        <div class="pt-5 px-5">
          <font-awesome-icon :icon="i.icon" class="text-4xl text-yellow-500 " />
          <h1 class="font-semibold text-lg py-2">{{i.name}}</h1>
          <p class="pb-4">{{ i.text }}</p>
          <DetailButton class="bg-yellow-500 text-white text-center py-2 rounded-md   h-10 w-12 ">Read More</DetailButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import DetailButton from "../DetailButton";
export default {
    components:{DetailButton},
  data() {
    return {
      services: [
        {
          id: 1,
          name: "cab services",
          text: "we provide cab services for your stay to explore more...",
          icon: "fa-solid fa-car",
        },
        {
          id: 2,
          name: "Ticket Booking",
          text: "we book all kind of national and international tickets to your destination...",
          icon: "fa-solid fa-ticket",
        },
        {
          id: 3,
          name: "Hotel Booking",
          text: "You can easily book according to your budget hotel in our website...",
          icon: "fa-solid fa-hotel",
        },
      ],
    };
  },
};
</script>
<style scoped></style>

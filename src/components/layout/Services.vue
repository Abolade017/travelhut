<template>
  <div class="bg-yellow-50" id="bg">
    <h1 class="text-center font-bold text-gray-700 opacity-90 py-10 text-3xl">
      Our Services
    </h1>
    <div class=" md:pt-0 pt-6 py-16  px-10 md:flex-row flex-col flex md:p-20 md:justify-between justify-start space-y-6 md:space-y-0">
      <div class="bg-white rounded-md  w-auto md:w-96" v-for="i in services" :key="i">
        <div class="pt-5 px-5 pb-4">
          <font-awesome-icon :icon="i.icon" class="text-4xl text-yellow-500 " />
          <h1 class="font-semibold text-lg py-2">{{i.name}}</h1>
          <p class="pb-4">{{ i.text }}</p>
          <DetailButton @show-details="show=!show" class="bg-yellow-500 text-white text-center py-2 rounded-md   h-10 w-24 ">Read More</DetailButton>
          <div v-show="show" class="pb-6">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae quibusdam cum iste iusto quaerat porro fugit, doloribus
              perferendis corrupti minus error fugiat qui illo illum harum quam
              quisquam accusantium consectetur.
            </p>
          </div>
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
      show:false,
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

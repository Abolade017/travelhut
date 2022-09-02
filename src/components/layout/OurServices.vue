<template>
  <div class="bg-gray-100 w-full">
    <div class="py-20">
      <div class="">
        <h1 class="text-4xl text-yellow-500 font-bold text-center">
          Our Services
        </h1>
        <div class="py-20">
          <Services />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Services from "../Services.vue";
export default {
  components: {
    Services,
  },
};
</script>

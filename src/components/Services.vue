<template>
  <div class="flex flex-wrap space-x-10 justify-center">
    <div v-for="country in countryList" :key="country.id" class="pt-10">
      <img :src="country.photo" alt="" class="h-full w-96 rounded-md" />{{ country.name }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["countryList"]),
  },
};
</script>

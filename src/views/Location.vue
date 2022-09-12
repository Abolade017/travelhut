<template>
  <div>
    <div class="">
      <Navbar />
      <div>
        
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer";
export default {
    prop:['image'],
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
    //   api_key: "26585d44eef5462f9ad6e3a1fdea5e90",
    //   location: [],
    };
  },
  methods: {
    // getLocation() {
    //   fetch(

    //     `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${this.api_key}    `  )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.location = data;
    //     });
    // },
  },
};
</script>

<template>
    <div>
         <div class="flex items-center justify-between p-6">
      <img
        src="../../assets/images/travelhut-logo-removebg-preview.png"
        alt="travelhut-logo"
        class="w-40 h-20"
      />
      <div class="flex flex-row items-center space-x-10">
        <nav v-for="nav in navs" :key="nav.id" class="">
          <router-link
            :to="nav.path"
            class="capitalize text-yellow-400 font-bold text-2xl" id="nav-link"
            >{{ nav.name }}</router-link
          >
        </nav>
      </div>
    </div>
   
    </div>
</template>
<script>
export default {
     data() {
    return {
      navs: [
        { id: 1, name: "home", path: "/" },
        { id: 2, name: "about", path: "/about" },
        { id: 3, name: "our services", path: "/our-services" },
        { id: 4, name: "contact", path: "/contact" },
      ],
    };
  },
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
#nav-link{
  font-family: "Noto Serif", serif;
}
</style>
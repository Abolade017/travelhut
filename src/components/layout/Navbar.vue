<template>
  <div>
    <div class="hidden md:flex  justify-between px-10 py-6">
      <img
        src="../../assets/images/travelhut-logo-removebg-preview.png"
        alt="travelhut-logo"
        class="w-40 h-20"
      />
      <div class="flex flex-row items-center space-x-14">
        <nav v-for="nav in navs" :key="nav.id" class="">
          <router-link
            :to="nav.path"
            class="capitalize text-yellow-400 font-bold text-xl"
            id="nav-link"
            >{{ nav.name }}</router-link
          >
        </nav>
        <div class="flex space-x-20 pl-20">
          <!-- <router-link
            to="/login"
            class="capitalize text-yellow-400 font-bold text-xl"
            >Login</router-link
          >
          <router-link
            to="/Sign-up"
            class="bg-yellow-500 text-white rounded-md font-bold h-10 w-24 text-center py-1 px-2 text-lg"
            >Sign Up</router-link
          > -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLink:false,
      isSelected: false,
      navs: [
        { id: 1, name: "home", path: "/" },
        { id: 2, name: "about", path: "/about" },
        { id: 3, name: "destination", path: "/destination" },
        { id: 4, name: "contact", path: "/contact" },
        { id: 4, name: "services", path: "/services" },
        { id: 4, name: "pricing", path: "/pricing" },
      ],
    };
  },
  methods:{
    selectedLink(link){
      if (link==='about') {
        this.selectedLink===!this.selectedLink;
      }else if(link==='home'){
        this.selectedLink===!this.selectedLink;
      }else if(link==='destination'){
        this.selectedLink===!this.selectedLink;
      }else if(link==='contact'){
        this.selectedLink===!this.selectedLink;
      }else if(link==='services'){
        this.selectedLink===!this.selectedLink;
      }else if(link==='pricing'){
        this.selectedLink===!this.selectedLink;
      }else{
        this.selectedLink;
      }

    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200&family=Noto+Serif&family=Open+Sans:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@100&family=Sofia&display=swap");
#nav-link {
  font-family: "Noto Serif", serif;
}

.selectedLink:active{
  border: 1px solid orange;
  width: 100%;
  background-color: black;
   opacity: 0.5;
}.active {
  background-color: orange;
  border-radius: 6px;
  height: 12px;
  width: 36px;
}
</style>

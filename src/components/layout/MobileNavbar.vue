<template>
  <div class="md:hidden flex justify-between px-3">
    <div>
      <img
        src="../../assets/images/travelhut-logo-removebg-preview.png"
        class="h-10 w-20"
        alt=""
      />
    </div>
    <div class="">
      <button @click="collapsible = !collapsible">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <div class="absolute duration-800 ease-in w-80 z-10 bg-black h-96 pr-48 left-48 opacity-50" v-show="collapsible" id="collapse-navbar" >
        <nav v-for="nav in navs" :key="nav.id" class="py-4 ">
          <router-link
            :to="nav.path"
            class="demo capitalize text-yellow-400 text-base pl-4"
            :class="{active:linkSelected, demo:true}"
            id="nav-link"
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
      linkSelected:false,
      collapsible: false,
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
.selectedLink:active{
  border: 1px solid orange;
  width: 100%;
  background-color: black;
   opacity: 0.5;
}
</style>

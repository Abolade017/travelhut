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
      <div class="" v-show="collapsible" id="collapse-navbar">
        <nav v-for="nav in navs" :key="nav.id" class="py-2">
          <router-link
            :to="nav.path"
            class="capitalize text-yellow-400 text-base"
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
};
</script>
<style scoped>
.collapse-navbar{
    height: 100px;
    width: 100%;
    float: left;
}
</style>

<template>
  <div class="">
    <Navbar class="md:block hidden" />
    <MobileNavbar class="md:hidden block" />
    <div><DestinationList/></div>
    <Footer class="md:block hidden" />
    <div class="pt-20">
    <MobileFooter class="block md:hidden" />
  </div>
  </div>
</template>

<script>
  // import Destination from '../components/layout/Destination.vue';
import Navbar from '../components/layout/Navbar.vue';
import MobileNavbar from '../components/layout/MobileNavbar.vue';
import Footer from '../components/layout/Footer.vue';
import MobileFooter from '../components/layout/MobileFooter.vue';
// import Destination from '../components/layout/Destination.vue';
import DestinationList from '../components/DestinationList.vue';
export default {
  components:{ Navbar, MobileNavbar, Footer, MobileFooter,DestinationList },
  data() {
    return {
        services:[
            {id:1, name:'', photo:'', details:''},
            {id:2, name:'', photo:'', details:''},
            {id:3, name:'', photo:'', details:''},
            {id:4, name:'', photo:'', details:''},
            {id:5, name:'', photo:'', details:''},
            {id:6, name:'', photo:'', details:''},
        ],
    };
  },
  methods: {
   
  },
};
</script>

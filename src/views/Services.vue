<template>
    <div>
        <Navbar class="md:block hidden" />
        <MobileNavbar class="md:hidden block"/>
        <Services />
        <Footer class="md:block hidden"/>
        <MobileFooter class="md:hidden block" />
    </div>
</template>
<script>
import Services from '../components/layout/Services.vue';
import Navbar from '../components/layout/Navbar.vue';
import MobileFooter from '../components/layout/MobileFooter.vue';
import MobileNavbar from '../components/layout/MobileNavbar.vue';
import Footer from '../components/layout/Footer.vue';
export default {
    components:{
    Services,
    Navbar,
    MobileFooter,
    MobileNavbar,
    Footer
}
}
</script>
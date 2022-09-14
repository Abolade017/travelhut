import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faStar, faTicket, faHotel, faCar, faBars, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';




library.add(faInstagram, faFacebookF, faTwitter, faTwitter, faStar, faTicket, faHotel, faCar, faBars, faLocationDot, faEnvelope, faPhone);



const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;


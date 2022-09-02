import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


library.add(faInstagram);
library.add(faFacebookF);
library.add(faTwitter);
const app=createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;


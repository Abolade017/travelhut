import { createStore } from 'vuex';

export default createStore({
  state: {
    countries: [

      { id: 1, name: 'Newyork', 'photo': require('../assets/images/newyork.avif'), reviewStar: 10, price: 200 },
      // {id:1, name:'Newyork', photo:require('../assets/images/usa.avif'), reviewStar:10 },
      { id: 2, name: 'USA', photo: require('../assets/images/united-state.jpg'), reviewStar: 8, price: 250 },
      { id: 3, name: 'Paris', photo: require('../assets/images/paris.avif'), reviewStar: 6, price: 220 },
      { id: 4, name: 'Spain', photo: require('../assets/images/spain.avif'), reviewStar: 6, price: 180 },
      { id: 5, name: 'Germany', photo: require('../assets/images/germany.avif'), reviewStar: 8, price: 210 },
      { id: 6, name: 'Italy', photo: require('../assets/images/italy.avif'), reviewStar: 10, price:200 }
    ],
    travelHut: [
      { id: 1, text: "fa-brands fa-facebook-f", path: "" },
      { id: 2, text: "fa-brands fa-twitter", path: "" },
      { id: 3, text: "fa-brands fa-instagram", path: "" },
    ],
    ourTeam: [
      { id: 1, role: 'Director', picture: require('../assets/images/tour-manager.jpg'), name: 'caig carlos' },
      { id: 2, role: `Tour supervisor`, picture: require('../assets/images/tour-manager.jpg'), name: 'caig carlos' },
      { id: 3, role: 'Manager', picture: require('../assets/images/tour-manager.jpg'), name: 'caig carlos' },
      { id: 4, role: 'Social media manager', picture: require('../assets/images/tour-manager.jpg'), name: 'caig carlos' },
    ],
    customerReview:[
      {id:1, name:'Adeola Tawakalitu', comment:'The best agency to plan your summer', rate:10},
      {id:1, name:'Nwosu Ifeoma', comment:'very cheap and affordable', rate:10},
      {id:1, name:'Omoyeni Kehinde', comment:'highly recommended and stress free', rate:10},
    ],
    currentLocationId: null,
  },
  getters: {
    countryList(state) {
      return state.countries;
    },
    getCustomerReview(state){
      return state.customerReview;
    },
    getCurrentLocationId(state) {
      return state.currentLocationId;
    },
    getCurrentCountry(state, getters) {
      const locationId = getters.getCurrentLocationId;
      const countries = state.countries;
      let currentCountry = {};

      const currentCountryIndex = countries.findIndex((country) => country.id == locationId);
      if(currentCountryIndex != -1){
        currentCountry = countries[currentCountryIndex];
      }

      return currentCountry;
    },
  },
  mutations: {
    SET_CURRENT_LOCATION_ID(state, payload){
      state.currentLocationId = payload;
    }
  },
  actions: {
  },
  modules: {
  }
});

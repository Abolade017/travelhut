import { createStore } from 'vuex';

export default createStore({
  state: {
    countries: [
      
      { id: 1, name: 'Newyork', 'photo': require('../assets/images/newyork.avif'), reviewStar:10 },
      // {id:1, name:'Newyork', photo:require('../assets/images/usa.avif'), reviewStar:10 },
      { id: 2, name: 'USA', photo: require('../assets/images/united-state.jpg'), reviewStar:8 },
      { id: 3, name: 'Paris', photo: require('../assets/images/paris.avif'), reviewStar:6  },
      { id: 4, name: 'Spain', photo: require('../assets/images/spain.avif'), reviewStar:6  },
      { id: 5, name: 'Germany', photo: require('../assets/images/germany.avif'), reviewStar:8  },
      { id: 6, name: 'Italy', photo: require('../assets/images/italy.avif'), reviewStar:10  }
    ],
    travelHut: [
      { id: 1, text: "fa-brands fa-facebook-f", path: "" },
      { id: 2, text: "fa-brands fa-twitter", path: "" },
      { id: 3, text: "fa-brands fa-instagram", path: "" },
    ],
    ourTeam:[
      {id:1, role:'Director', picture:require('../assets/images/tour-manager.jpg'), name:'caig carlos'},
      {id:2, role:`Tour supervisor`, picture:require('../assets/images/tour-manager.jpg'), name:'caig carlos'},
      {id:3, role:'Manager', picture:require('../assets/images/tour-manager.jpg'), name:'caig carlos'},
      {id:4, role:'Social media manager', picture:require('../assets/images/tour-manager.jpg'), name:'caig carlos'},
    ],
  },
  getters: {
    countryList(state) {
      return state.countries;
    },
   
    // getCountryId(state){
    //   return state.countries.includes()
    // }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});

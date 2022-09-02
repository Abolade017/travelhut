import { createStore } from 'vuex';

export default createStore({
  state: {
    countries: [
      
      { id: 1, name: 'Newyork', 'photo': require('../assets/images/newyork.avif') },
      // {id:1, name:'Newyork', photo:require('../assets/images/usa.avif') },
      { id: 2, name: 'USA', photo: require('../assets/images/united-state.jpg') },
      { id: 3, name: 'Paris', photo: require('../assets/images/paris.avif')  },
      { id: 4, name: 'Spain', photo: require('../assets/images/spain.avif')  },
      { id: 5, name: 'Germany', photo: require('../assets/images/germany.avif')  },
      { id: 6, name: 'Italy', photo: require('../assets/images/italy.avif')  }
    ]
  },
  getters: {
    countryList(state) {
      return state.countries;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});

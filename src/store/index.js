import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchHistory: [],
    favouriteHeroes: []
  },
  mutations: {
    // Add new search term OR move existing to first place
    setSearchedItem(state, term) {
      if(state.searchHistory.includes(term)) {
        let index = state.searchHistory.indexOf(term);
        state.searchHistory.splice(index, 1);
        return state.searchHistory.push(term);
      }

      return state.searchHistory.push(term);
    },

    // Add new favourite hero
    setFavouriteHero(state, heroObj) {
      const favouriteHeroes = state.favouriteHeroes;
      const newHeroExists = favouriteHeroes.find(hero => hero.id === heroObj.id);

      if(newHeroExists) {
        return;
      }

      return state.favouriteHeroes.push(heroObj);
    },

    // Remove favourite hero
    deleteFavouriteHero(state, heroObj) {
      const favouriteHeroes = state.favouriteHeroes;
      const hero = favouriteHeroes.find(hero => hero.id === heroObj.id);

      if(!hero) {
        return;
      }

      const index = favouriteHeroes.indexOf(hero);
      return state.favouriteHeroes.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    // Get last five searched terms
    getSearchHistory: state => {
      return state.searchHistory.slice(Math.max(state.searchHistory.length - 5, 0));
    },

    // Get list of favourite heroes
    getFavouriteHeroes: state => {
      return state.favouriteHeroes;
    }
  }
})

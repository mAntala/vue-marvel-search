<template>
    <section class="page results">
        <!-- Search content -->
        <main class="results__content">
            <h1 class="results__title">Search results for <span class="results__term">{{searchTerm}}</span></h1>

            <div class="results__heroes" v-if="searchResults !== null && searchResults.results.length > 0">
                <hero-miniature v-for="(hero, index) in searchResults.results" :key="index" :hero="hero" />
            </div>
            <div class="results__heroes" v-else-if="searchResults !== null && searchResults.results.length === 0">
                No search results
            </div>
            <div class="results__heroes" v-else>
                Loading data...
            </div>
        </main>
    </section>
</template>

<script>
const API_KEY = 'e5e737271ccb95ad56e70d98032c1d06';

import axios from 'axios';
import HeroMiniature from '../components/HeroMiniature';

export default {
    name: 'Results',
    data() {
        return {
            searchResults: null
        }
    },
    components: {
        HeroMiniature
    },
    methods: {
        // Get heroes from Marvel API - for better UX, I am not using param ?name=XXX but ?nameStartWith=YYY
        // Example: Search "?name=Spider" will not return anything. ?nameStartsWith=Spider will return every Spider-Man in Marvel Universe
        async searchForHero(heroName) {
            const request = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroName}&apikey=${API_KEY}`);
            const {data} = await request;

            if(data.code === 200) {
                this.searchResults = data.data;
            }
        }
    },
    computed: {
        searchTerm() {
            return this.$route.query.hero;
        }
    },
    // If there is not query param "hero" or it is empty, return to homepage
    beforeMount() {
        if(!this.$route.query.hero) {
            this.$router.push('/');
        }

        this.searchForHero(this.searchTerm);
    }
}
</script>

<style lang="scss" scoped>
.results {
    &__content {
         padding: 53px 0 0 0;
    }

    &__term {
        color: #EC1D24;
    }
}
</style>
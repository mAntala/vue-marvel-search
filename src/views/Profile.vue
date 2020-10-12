<template>
    <section class="page profile">
        <section class="profile__content">
            <hero-profile v-if="heroData !== null" :hero="hero" :isFavourite="isHeroFavourite" @update-favourites="updateFavouriteHeroes" />
            <span v-else>Loading hero...</span>
        </section>
    </section>
</template>

<script>
const API_KEY = 'e5e737271ccb95ad56e70d98032c1d06';

import axios from 'axios';
import HeroProfile from '../components/HeroProfile';

export default {
    name: 'Profile',
    components: {
        HeroProfile
    },
    data() {
        return {
            heroData: null
        }
    },
    methods: {
        // Get hero data from Marvel API
        async getHeroData() {
            const request = await axios(`https://gateway.marvel.com/v1/public/characters/${this.heroID}?apikey=${API_KEY}`);
            const {data} = await request;

            if(data.code === 200) {
                this.heroData = data.data;
            }
        },
        // Update Favourite Heroes in Store. With condition if hero is already favourite or not
        updateFavouriteHeroes(heroObj) {
            const isFavourite = this.isHeroFavourite;

            if(!isFavourite) {
                return this.$store.commit('setFavouriteHero', heroObj);
            }
            return this.$store.commit('deleteFavouriteHero', heroObj);
        }
    },
    computed: {
        heroID() {
            return this.$route.params.id;
        },
        hero() {
            return this.heroData.results[0];
        },
        isHeroFavourite() {
            const favouriteHeroes = this.$store.getters.getFavouriteHeroes;
            const isHeroFavourite = favouriteHeroes.find(hero => hero.id === this.hero.id);

            return (isHeroFavourite !== undefined);
        }
    },
    beforeMount() {
        this.getHeroData();
    }
}
</script>

<style lang="scss" scoped>
.profile {
    &__content {
        padding: 73px 0 0 0;
    }
}
</style>
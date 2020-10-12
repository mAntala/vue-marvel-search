<template>
    <section class="page favourites">
        <main class="favourites__content">
            <div class="favourites__heroes" v-if="favouriteHeroes.length > 0">
                <hero-miniature v-for="(hero, index) in favouriteHeroes" :key="index" :hero="hero" />
            </div>
            <div class="favourites__heroes" v-else>
                No Heroes found yet.
            </div>
        </main>
    </section>
</template>

<script>
import HeroMiniature from '../components/HeroMiniature'

export default {
    name: 'Favourites',
    components: {
        HeroMiniature
    },
    computed: {
        favouriteHeroes() {
            return this.$store.getters.getFavouriteHeroes;
        }
    }
}
</script>

<style lang="scss" scoped>
.favourites {
    &__content {
        padding: 73px 0 0 0;
    }
}
</style>
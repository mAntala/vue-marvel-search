<template>
    <main class="hero-profile">
        <figure class="hero-profile__thumbnail">
            <img :src="heroThumbnail" :title="hero.name" :alt="hero.name" />
        </figure>

        <main class="hero-profile__content">
            <h1 class="hero-profile__title">
                {{hero.name}}

                <!-- Full STAR (Hero is marked as favourite -->
                <span :title="'Unmark ' + hero.name + ' as Favourite Hero'"
                      @click="updateFavouriteHeroes(hero)"
                      v-if="isFavourite"
                      class="hero-profile__star"
                >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>

                <!-- Empty STAR -->
                <span :title="'Mark ' + hero.name + ' as Favourite Hero'"
                      @click="updateFavouriteHeroes(hero)"
                      v-else
                      class="hero-profile__star"
                >
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                </span>

            </h1>
            <p class="hero-profile__description">
                {{hero.description}}
            </p>

            <button class="btn" @click="$router.go(-1)">
                Previous page
            </button>
        </main>
    </main>
</template>

<script>
export default {
    name: 'hero-profile',
    props: {
        hero: {
            type: Object,
            required: true
        },
        isFavourite: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateFavouriteHeroes(heroObj) {
            this.$emit('update-favourites', heroObj);
        }
    },
    computed: {
        heroThumbnail() {
            return this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
        }
    }
}
</script>

<style lang="scss" scoped>
.hero-profile {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__thumbnail {
        width: 200px;
        flex: 1 1 100%;
        margin: 0 0 2rem 0;
        text-align: center;

        & img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 100%;
        }
    }

    &__content {
        flex: 1 1;
    }

    &__title {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    &__description {
        margin: 0 0 2rem 0;
        line-height: 1.5;
    }

    &__star {
        width: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 0 0 0 0.5rem;

        & svg {
            width: 24px;
            fill: #f0141e;
        }
    }
}
</style>
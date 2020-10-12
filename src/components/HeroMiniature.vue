<template>
    <router-link :to="'/profile/' + hero.id" class="hero-miniature__link">
        <article class="hero-miniature" :id="hero.id">
            <!-- Hero Miniature Header with Thumbnail -->
            <header class="hero-miniature__header">
                <figure class="hero-miniature__thumbnail">
                    <img :src="heroThumbnail"
                         :title="hero.name"
                         :alt="hero.name"
                    />
                </figure>
            </header>

            <!-- Hero Miniature Content -->
            <main class="hero-miniature__content">
                <h2 class="hero-miniature__title">
                    {{hero.name}}
                </h2>
                <p class="hero-miniature__description">
                    {{heroShortDescription}}
                </p>
            </main>
        </article>
    </router-link>
</template>

<script>
export default {
    name: 'hero-miniature',
    props: {
        hero: {
            type: Object,
            required: true
        }
    },
    computed: {
        heroThumbnail() {
            return this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
        },
        heroShortDescription() {
            if(!this.hero.description) {
                return 'No description.';
            }
            return this.hero.description.substring(0, 100) + '...';
        }
    }
}
</script>

<style lang="scss" scoped>
.hero-miniature {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 0.5rem 0;
    margin: 0 0 0.5rem 0;
    border-bottom: 1px solid rgba(#111517, 0.2);

    &__header {
        flex: 0 1 100px;
    }

    &__thumbnail {
        width: 100px;
        background-color: rgba(#111517, 0.05);
        margin: 0;

        & img {
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
    }

    &__content {
        flex: 1 0;
        padding: 0 0 0 0.5rem;
    }

    &__title {
        margin: 0 0 0.5rem;
    }

    &__description {
        margin: 0;
    }

    &__link {
        color: #111517;
        text-decoration: none;

        &:hover {
            color: #f0141e;
        }
    }
}
</style>
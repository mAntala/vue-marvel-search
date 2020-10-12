<template>
    <section class="search__suggestions" v-if="searchSuggestions.length > 0">
        <p class="search__suggestions-title">
            You recently searched for:
        </p>
        <span class="suggestion"
              v-for="(suggestion, index) in searchSuggestions"
              :key="index"
              @click="updateSearchInput(suggestion)"
        >
            {{suggestion}}
        </span>
    </section>
</template>

<script>
export default {
    name: 'search-suggestions',
    computed: {
        searchSuggestions() {
            return this.$store.getters.getSearchHistory;
        }
    },
    methods: {
        updateSearchInput(suggestion) {
            this.$emit('update-search', suggestion);
            this.$emit('suggestion-click', suggestion);
        }
    },
}
</script>

<style lang="scss" scoped>
.search__suggestions {
    padding: 0 1rem;
}
.search__suggestions-title {
    font-weight: bolder;
}

.suggestion {
    cursor: pointer;
    color: #f0141e;
    margin: 0 0.75rem 0;

    &:last-of-type {
        margin: 0;
    }

    &:hover {
        text-decoration: underline;
    }
}
</style>
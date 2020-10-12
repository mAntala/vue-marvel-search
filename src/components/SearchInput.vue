<template>
    <form class="search__input-container"
          @submit.prevent="$router.push({ name: 'Search', query: {hero: searchInput} })"
    >
        <input class="search__input"
               type="text"
               name="search-text"
               :value="searchInput"
               @input="updateSearchInput($event)"
               placeholder="Start typing hero's name"
        />
        <button type="submit" class="search__button">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
        </button>
    </form>
</template>

<script>
export default {
    name: 'search-input',
    data() {
        return {
            typingDelay: null
        }
    },
    methods: {
        /**
         * @name updateSeachInput
         * @description Update parent component search input. Delay duration: 0.5s
         * @param event
         */
        updateSearchInput(event) {
            clearTimeout(this.typingDelay);
            this.typingDelay = setTimeout(() => {
                this.$emit('update-search', event.target.value);
                this.typingDelay = null;
            }, 500);
        }
    },
    computed: {
        searchInput() {
            return this.$attrs.value;
        }
    }
}
</script>

<style lang="scss" scoped>
.search__input-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.search__input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 1rem 1.125rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all .2s linear;
    outline: none;
    flex: 1 0 auto;

    &:focus {
        border-color: rgba(0, 0, 0, 0.4);
    }
}

.search__button {
    border: 1px solid #f0141e;
    outline: none;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    padding: 0.875rem 1.125rem;
    background-color: #f0141e;
    cursor: pointer;

    & svg {
        height: 16px;
        fill: #fff;
    }
}
</style>
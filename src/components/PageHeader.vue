<template>
    <header class="page-header">
        <nav class="page-nav">
            <router-link to="/">
                <span class="page-nav__logo">
                    <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#EC1D24" d="M0 0h30v52H0z"></path><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg>
                </span>
            </router-link>
            <section class="page-nav__links">
                <router-link to="/">Search</router-link>
                <router-link to="/favourites">Favourite Heroes</router-link>
            </section>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'page-header'
}
</script>

<style lang="scss" scoped>
.page-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid rgba(#111517, 0.4);
    background-color: #FFF;
    z-index: 1000;
}

.page-nav {
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    & > a:first-of-type {
        display: flex;
    }

    &__logo {
        width: 36px;
        height: 52px;

        & svg {
            width: 36px;
        }
    }

    &__links {
        & a {
            text-transform: uppercase;
            color: #111517;
            text-decoration: none;
            margin-right: 1rem;
            font-weight: bold;

            &:last-of-type {
                margin-right: 0;
            }

            &:hover {
                color: #EC1D24;
            }
        }
    }
}
</style>
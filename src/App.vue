<template>
  <div id="app">
    <!-- Page Header -->
    <page-header />

    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'

export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
html, body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 16px;
}

.page {
  max-width: 800px;
  margin: 0 auto;
}

.container {
  width: 100%;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 6px;
  background-color: #f0141e;
  border: none;
  color: #FFF;
  cursor: pointer;
  font-size: 1rem;
}
</style>
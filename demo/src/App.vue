<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="info" fixed="sticky-top">
      <div class="container">
        <b-navbar-brand :to="{name:'home'}">
          <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt />Vuex Web3
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="justify-content-end">
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}">Demo</b-nav-item>
            <b-nav-item :to="{name:'donate'}">Donate</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
</style>

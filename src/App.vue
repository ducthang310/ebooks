<template>
  <div id="app" :class="{'intro-page': routeName === 'intro'}">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" :to="{name: 'index'}">
        <img class="img-logo" src="./assets/logo.png" alt="EBooks" title="EBooks"/>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse main-menu" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{'active': routeName === 'index'}">
            <router-link class="nav-link" :to="{name: 'index'}">Home</router-link>
          </li>
          <li class="nav-item" :class="{'active': routeName === 'search'}">
            <router-link class="nav-link" :to="{name: 'search'}">Search</router-link>
          </li>
          <li class="nav-item" :class="{'active': routeName === 'intro'}">
            <router-link class="nav-link" :to="{name: 'intro'}">Intro</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://shiroad.com" target="_blank">ShiRoad</a>
          </li>
        </ul>
        <a></a>
        <router-link class="btn my-2 my-sm-0 btn-line-tran" :class="{'active': numberItem}" :to="{name: 'cart'}"><span class="ico icon-cart"></span><span>View cart</span></router-link>
      </div>
    </nav>

    <main role="main" class="container main-content">
      <router-view/>
    </main>

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    routeName() {
      return this.$route.name
    },

    cart() {
      return this.$store.state.cart
    },

    numberItem() {
      return this.$store.state.cart.items.length
    }
  }
}
</script>

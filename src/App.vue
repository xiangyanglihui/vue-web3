<template>
  <div id="app">
    <navMeum></navMeum>
    <div class="container">
      <router-view v-if="isInjected"/>
      <LoginHelp v-else></LoginHelp>
    </div>
  </div>
</template>

<script>
import navMeum from '@/layouts/navMeum'
import footerPage from '@/layouts/footerPage'
import LoginHelp from '@/components/LoginHelp'
import {mapState} from 'vuex'
export default {
  name: 'App',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from App.vue')
    this.$store.dispatch('registerWeb3')
  },
  computed: mapState({
    isInjected: state => state.blockchain.web3.isInjected
  }),
  components: {
    navMeum, footerPage, LoginHelp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

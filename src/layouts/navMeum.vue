<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light">
<div class="container">
  <a class="navbar-brand" href="/">
    <img src="\static\assets\logo.png" width="35" height="35" class="d-inline-block align-top" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav" v-if="isInjected">
      <b-nav-item class="hover-white" href="#">發表發文</b-nav-item>
      <b-nav-item class="hover-white" href="#">我的文章</b-nav-item>
    </ul>
  </div>
  </div>
</nav>
</template>

<script>
import {NETWORKS} from '@/util/constants/networks'
import {mapState} from 'vuex'
export default {
  name: 'navMeum',
  computed: mapState({
    isInjected: state => state.blockchain.web3.isInjected,
    network: state => NETWORKS[state.blockchain.web3.networkId],
    coinbase: state => state.blockchain.web3.coinbase,
    balance: state => state.blockchain.web3.balance,
    ethBalance: state => {
      if (state.blockchain.web3.web3Instance !== null) return state.blockchain.web3.web3Instance().utils.fromWei(state.blockchain.web3.balance, 'ether')
    }
  })
}
</script>

<style scoped>
.navbar {
    border-radius: 0;
}
.hover-white:focus,.hover-white:hover{
    transition: all .1s ease-in;
    color:#fff
}
</style>

<template>
  <div class='metamask-info'>
    <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask 已安裝</p>
    <p>您目前連接的以太網路: {{ network }}</p>
    <p>您的地址: {{ coinbase }}</p>
    <p>目前餘額: {{ balance }} Wei // {{ ethBalance }} Eth</p>
  </div>
</template>

<script>
import {NETWORKS} from '../util/constants/networks'
import {mapState} from 'vuex'
export default {
  name: 'hello-metamask',
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
.metamask-info {
  text-align:center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>

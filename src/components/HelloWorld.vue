<template>
  <div class='metamask-info'>
    <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask 已安裝</p>
    <p>您目前連接的以太網路: {{ network }}</p>
    <p>您的地址: {{ coinbase }}</p>
    <p>目前餘額: {{ balance }} Wei // {{ ethBalance }} Eth</p>
    <p>此篇喜翻 {{ like }} </p>
    <button v-on:click="Ilikeit">I like it</button>
  </div>
</template>

<script>
import {NETWORKS} from '../util/constants/networks'
import {mapState} from 'vuex'
export default {
  name: 'hello-metamask',
  data () {
    return {
      like: 0
    }
  },
  beforeCreate () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  },
  methods: {
    getLike () {
      if (this.$store.state.blockchain.contractInstance != null) {
        this.$store.state.blockchain.contractInstance().methods._like().call()
          .then((totLike) => {
            console.log(totLike)
            this.like = totLike
          })
      }
    },
    Ilikeit () {
      this.$store.state.blockchain.contractInstance().methods.I_like().send({
        value: this.$store.state.blockchain.web3.web3Instance().utils.toWei('0.001', 'ether'),
        from: this.$store.state.blockchain.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
          this.getLike()
        }
      })
    }
  },
  watch: {
    contractInstance () {
      this.getLike()
    }
  },
  computed: mapState({
    contractInstance: state => state.blockchain.contractInstance,
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

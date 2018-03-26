import Web3 from 'web3'
import store from '@/store/'

let pollWeb3 = function (state) {
  setInterval(() => {
    let web3 = window.web3
    web3 = new Web3(web3.currentProvider)
    if (web3 && store.state.blockchain.web3.web3Instance) {
      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.error(error)
        } else if (coinbase !== store.state.blockchain.web3.coinbase) {
          let newCoinbase = coinbase
          web3.eth.getBalance(newCoinbase, function (err, newBalance) {
            if (err) {
              console.log(err)
            } else {
              store.dispatch('pollWeb3', {
                coinbase: newCoinbase,
                balance: newBalance
              })
            }
          })
        } else {
          web3.eth.getBalance(store.state.blockchain.web3.coinbase, (err, polledBalance) => {
            if (err) {
              console.log(err)
            } else if (polledBalance !== store.state.blockchain.web3.balance) {
              store.dispatch('pollWeb3', {
                coinbase: store.state.blockchain.web3.coinbase,
                balance: polledBalance
              })
            }
          })
        }
      })
    }
  }, 500)
}

export default pollWeb3

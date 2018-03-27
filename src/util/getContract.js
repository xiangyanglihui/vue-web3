import Web3 from 'web3'
import {address, ABI} from './constants/Contract'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let LikeContractInstance = new web3.eth.Contract(ABI, address)
  // console.log(LikeContractInstance)
  resolve(LikeContractInstance)
})

export default getContract

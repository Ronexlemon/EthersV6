const {ethers,Wallet, verifyMessage} = require("ethers")

const CreateWallet = require("./Wallet/wallet")
const sendingTransaction = require("./Transaction/sendTransaction")
 const { privateKey:key, publicKey, mnemonic ,publicKey1,address1, privateKey} = require("./Constants/address")
 const {constant} = require("./Ether-Constant.js/constant")
 const {Cryptography} = require("./cryptograpyFunctions/functions")
 const {password} = require("./cryptograpyFunctions/passwords")

const daiAddress = "dai.tokens.ethers.eth";


var walletDetails =[]

// connect to ganache




async function getSigener(){

    const providers = new ethers.JsonRpcProvider("http://127.0.0.1:8545")
const signer =new  Wallet(key ,providers)
const blockNumber = await providers.getBlockNumber()

const tx = await sendingTransaction(signer,address1)

const {privateKey,publicKey,mnemonic,address} = await CreateWallet()
walletDetails.push({"privateKey":privateKey,"publicKey":publicKey,"mnemonic":mnemonic,"address":address})





console.log("dai tokens",providers._getConnection());
console.log("get signer",signer)
console.log("block Number:",blockNumber)
console.log(`New Wallet Generated : privateKey: ${privateKey} , publicKey: ${publicKey} and seedphrase ${mnemonic.phrase} , address ${address}`)
}
async function signMessage(){
    const signer =new  Wallet(privateKey)
   





    const message= 'Sign into tet.com'

    const sig = await signer.signMessage(message)
    console.log("signature: ",sig)

  const verification =  verifyMessage(message,sig)
  console.log("verification: ",verification)
}

//signMessage()

//getSigener()
async function AbiEncoder(){
  const v2= ethers.getAddress(address1)
  const v3= ethers.getCreateAddress({from : address1,nonce:3})
  const v4 = ethers.isAddress(address1)
  const data = ["ronex"]
  //const value = ethers.AbiCoder.defaultAbiCoder().encode(data);
  //const value2 = ethers.AbiCoder.decode(data)
  console.log(v2)
  console.log(v3)
  console.log(v4)
}



AbiEncoder()
constant()
Cryptography()
password()
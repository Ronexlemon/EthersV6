const {ethers,Wallet} = require("ethers")

const CreateWallet = require("./Wallet/wallet")
const sendingTransaction = require("./Transaction/sendTransaction")
 const { privateKey:key, publicKey, mnemonic ,publicKey1,address1} = require("./Constants/address")

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


getSigener()

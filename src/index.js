const {ethers,Wallet} = require("ethers")

const CreateWallet = require("./Wallet/wallet")
const sendingTransaction = require("./Transaction/sendTransaction")

const daiAddress = "dai.tokens.ethers.eth";

var walletDetails =[]

// connect to ganache




async function getSigener(){

    const providers = new ethers.JsonRpcProvider("http://127.0.0.1:8545")
const signer = await providers.getSigner()
const blockNumber = await providers.getBlockNumber()

const {privateKey,publicKey,mnemonic} = await CreateWallet()
walletDetails.push({"privateKey":privateKey,"publicKey":publicKey,"mnemonic":mnemonic})





console.log("dai tokens",providers._getConnection());
console.log("get signer",signer)
console.log("block Number:",blockNumber)
console.log(`New Wallet Generated : privateKey: ${privateKey} , publicKey: ${publicKey} and seedphrase ${mnemonic.phrase}`)
}


getSigener()

const {Wallet} = require("ethers")

 async function CreateWallet(){
    const  wallet = Wallet.createRandom()
    
    return {privateKey:wallet.privateKey,publicKey:wallet.publicKey,mnemonic:wallet.mnemonic}
}

module.exports = CreateWallet;
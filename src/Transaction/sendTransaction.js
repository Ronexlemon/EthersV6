const { ethers ,parseEther} = require("ethers");



async function sendingTransaction(signer ,address){
    const txt = signer.sendTransaction({
        to: address,
        value: parseEther("1"),
        

    })
    return txt;


}

module.exports = sendingTransaction
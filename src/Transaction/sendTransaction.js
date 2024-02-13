
async function sendingTransaction(signer ,address){
    const txt = signer.sendTransaction({
        to: address,
        value: ethers.parseEther("1")

    })
    return txt;


}

module.exports = sendingTransaction
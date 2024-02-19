const {ethers} = require("ethers")


async function Cryptography(){
const name = "0xa1b2ca"
const bytes32 = ethers.keccak256(name);
console.log("keccak256 hash:",bytes32)

const sha256 = ethers.sha256(name)
console.log("sha256:",sha256)

}

module.exports ={
    Cryptography
}
const {ethers, toUtf8Bytes} = require("ethers")

async function password(){
    const password = "0xa4be"
    const passwordBytes = toUtf8Bytes(password,"NFKC")
    const salt = ethers.sha256(password)



    const val = ethers.pbkdf2(passwordBytes,salt.toString(),1024,16,"sha256")
    console.log("password value:",val)

}

module.exports = {password}
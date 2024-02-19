const {ethers} = require("ethers")

async function constant(){
    const minint256 = ethers.MinInt256;
  
    const maxint256 = ethers.MaxInt256;
    
    console.log("minInt256",minint256)
    console.log("maxmum int",maxint256)
  
  
    const maxuint256 = ethers.MaxUint256;
    
    console.log("maxmum uint:",maxuint256)
  
  
  
    const zeroAddress = ethers.ZeroAddress;
    console.log("addressmzero:",zeroAddress)
  
    const zeroHash = ethers.ZeroHash;
  
    console.log("zero Hash:",zeroHash)
  
    const weiPerEther = ethers.WeiPerEther;
    console.log("weiPerEther: ",weiPerEther)
  
  
  }

  module.exports ={constant}
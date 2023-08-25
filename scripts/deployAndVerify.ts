import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  //Deploy Projects Contract
  const Token = await ethers.getContractFactory("Projects");
  const token = await Token.deploy();
  console.log("Basic Contract Address-> ", token.address);
  
  await token.deployTransaction.wait(5);

  await hre.run("verify:verify", {
    address: token.address,
    contract: "contracts/Projects.sol:Projects",
  });

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("Deploy error-> ", error);
    process.exit(1);
  });


  // https://mumbai.polygonscan.com/address/0x2BDb4c36Cf8b194B497FEeB64cE017A602ff9D8b#code
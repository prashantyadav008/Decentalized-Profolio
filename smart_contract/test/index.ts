import { BigNumber } from "ethers";
import { ethers } from "hardhat";

export async function basicMethod() {
  // random address
  const [deployer, ...users] = await ethers.getSigners();

  // Deploy Token Contract
  const Projects = await ethers.getContractFactory("Projects");
  const projects = await Projects.deploy();

  return {
    deployer,
    users,
    projects,
  };
}

// conver value into Big Number 1^18 or 1e18
function decimal(value: any) {
  const powValue = BigNumber.from("10").pow(18);
  return BigNumber.from(value).mul(powValue);
}

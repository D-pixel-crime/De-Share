const { ethers } = require("hardhat");
const hre = require("hardhat");


async function main() {
  const Upload = await ethers.deployContract("Upload");
  console.log("Upload : ", Upload.target )
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
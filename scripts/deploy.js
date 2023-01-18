const { ethers } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Using contracts with the account:", deployer.address);
   
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const c = await ethers.getContractFactory("MoonshotNFT");
  const gasPrice = await c.signer.getGasPrice();
  console.log(`Current gas price: ${gasPrice}`);
     
  const m = await c.deploy();
  
  console.log("Contract deployed at: " , m.address);

}

main()
  .then(() => { console.log("success"); process.exit(0);})
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

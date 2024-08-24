async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Verifier = await ethers.getContractFactory("Verifier");
  const verifier = await Verifier.deploy();
  await verifier.deployed();

  const LoveLetterVerifier = await ethers.getContractFactory("LoveLetterVerifier");
  const loveLetterVerifier = await LoveLetterVerifier.deploy(verifier.address);
  await loveLetterVerifier.deployed();

  console.log("Verifier contract deployed to:", verifier.address);
  console.log("LoveLetterVerifier contract deployed to:", loveLetterVerifier.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

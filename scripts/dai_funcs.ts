import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {MyDefiProject} from "../typechain";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
    console.log(`${await MyDefiProject.address}`);


}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

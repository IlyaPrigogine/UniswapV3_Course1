import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {IERC20, MyDefiProject} from "../typechain";
import {
    dai_ropsten,
    daiAmountInMaximum,
    initialApproveAmount,
    swapAmount,
    weth_ropsten,
    wethAmountOut
} from "../Helpers/constants";
import {formatEther, parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    if (await network.name === 'ropsten') {
        const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
        console.log(`${await MyDefiProject.address}`);

        // const dai = await ethers.getContractAt<IERC20>('IERC20',dai_ropsten);
        // await dai.approve(MyDefiProject.address,parseEther(initialApproveAmount));
        //
        // const weth = await ethers.getContractAt<IERC20>('IERC20',weth_ropsten);
        // await weth.approve(MyDefiProject.address,parseEther(initialApproveAmount));

        // await MyDefiProject.swapExactInputSingle(parseEther(swapAmount));
        await MyDefiProject.swapExactOutputSingle(parseEther(wethAmountOut),parseEther(daiAmountInMaximum));
    }



}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

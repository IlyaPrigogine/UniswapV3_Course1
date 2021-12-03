import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {IERC20, MyDefiProject, MyDefiProject2} from "../typechain";
import {
    dai_ropsten,
    daiAmountInMaximum,
    initialApproveAmount,
    daiAmountIn,
    weth_ropsten,
    wethAmountOut, usdc_ropsten
} from "../Helpers/constants";
import {formatEther, parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    /* s1: myDefiProject scripts */
    // if (await network.name === 'ropsten') {
    //     const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
    //     console.log(`${await MyDefiProject.address}`);
    //
    //     // const dai = await ethers.getContractAt<IERC20>('IERC20',dai_ropsten);
    //     // await dai.approve(MyDefiProject.address,parseEther(initialApproveAmount));
    //     //
    //     // const weth = await ethers.getContractAt<IERC20>('IERC20',weth_ropsten);
    //     // await weth.approve(MyDefiProject.address,parseEther(initialApproveAmount));
    //
    //     await MyDefiProject.swapExactInputSingle(parseEther(daiAmountIn));
    //     await MyDefiProject.swapExactOutputSingle(parseEther(wethAmountOut),parseEther(daiAmountInMaximum));
    // }

    //#s2: MyDefiProject2 scripts
    if (await network.name === 'ropsten') {
        const MyDefiProject2 = await ethers.getContract<MyDefiProject2>('MyDefiProject2');
        console.log(`${await MyDefiProject2.address}`);
        //
        // const dai = await ethers.getContractAt<IERC20>('IERC20',dai_ropsten);
        // await dai.approve(MyDefiProject2.address,parseEther(initialApproveAmount));
        //
        // const weth = await ethers.getContractAt<IERC20>('IERC20',weth_ropsten);
        // await weth.approve(MyDefiProject2.address,parseEther(initialApproveAmount));
        //
        // const usdc = await ethers.getContractAt<IERC20>('IERC20',usdc_ropsten);
        // await usdc.approve(MyDefiProject2.address,parseEther(initialApproveAmount));

        // await MyDefiProject2.swapExactInputMultihop(parseEther(daiAmountIn));
        // await MyDefiProject2.swapExactInputMultihopV2(parseEther(daiAmountIn));

        await MyDefiProject2.swapExactOutputMultiHop(parseEther(wethAmountOut),parseEther(daiAmountInMaximum));
    }



}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

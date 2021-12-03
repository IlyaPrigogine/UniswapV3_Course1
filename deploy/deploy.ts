import {DeployFunction} from 'hardhat-deploy/types';
import {swapAddress_ropsten} from "../Helpers/constants";


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy} = deployments;
    const {owner} = await getNamedAccounts();

    console.log('chainId:', await getChainId());
    if (network.name === 'ropsten') {
        await deploy('MyDefiProject',{
            from: owner,
            args: [swapAddress_ropsten],
            log: true,
        });

        await deploy('MyDefiProject2',{
            from: owner,
            args: [swapAddress_ropsten],
            log: true,
        });
    }

};
export default func;
func.tags = ['MyDefiProject'];

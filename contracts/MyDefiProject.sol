// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.4;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';

contract MyDefiProject {
    ISwapRouter public immutable swapRouter;

    address public constant DAI = 0xaD6D458402F60fD3Bd25163575031ACDce07538D; //dai in ropsten
    address public constant WETH9 = 0xc778417E063141139Fce010982780140Aa0cD5Ab; //weth in ropsten
    uint24 public constant poolFee = 3000;

    constructor (ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

    function swapExactInputSingle(uint256 amountIn) external returns (uint256 amountOut) {
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);
        TransferHelper.safeApprove(DAI,address (swapRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn : DAI,
            tokenOut : WETH9,
            fee : poolFee,
            recipient : msg.sender,
            deadline : block.timestamp,
            amountIn : amountIn,
            amountOutMinimum : 0,
            sqrtPriceLimitX96 : 0
        });

        amountOut = swapRouter.exactInputSingle(params);
        return amountOut;

    }
}

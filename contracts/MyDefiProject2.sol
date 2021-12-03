// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.4;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';


contract MyDefiProject2 {
    ISwapRouter public immutable swapRouter;

    address public constant DAI = 0xaD6D458402F60fD3Bd25163575031ACDce07538D;
    address public constant WETH9 = 0xc778417E063141139Fce010982780140Aa0cD5Ab;
    address public constant USDC = 0x07865c6E87B9F70255377e024ace6630C1Eaa37F;

    uint24 public constant poolFee = 3000;

    constructor (ISwapRouter swapRouter_) {
        swapRouter = swapRouter_;
    }

    function swapExactInputMultihop(uint256 amountIn) external returns(uint256 amountOut) {
        TransferHelper.safeTransferFrom(DAI, msg.sender, address (this), amountIn);
        TransferHelper.safeApprove(DAI, address (swapRouter), amountIn);

        ISwapRouter.ExactInputParams memory params =
            ISwapRouter.ExactInputParams({
            path: abi.encodePacked(DAI, poolFee, USDC, poolFee, WETH9),
            recipient : msg.sender,
            deadline: block.timestamp,
            amountIn: amountIn,
            amountOutMinimum: 0
        });

        amountOut = swapRouter.exactInput(params);
    }
}

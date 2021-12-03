// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.4;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';


contract MyDefiProject2 {
    ISwapRouter public immutable swapRouter;
    constructor (ISwapRouter swapRouter_) {
        swapRouter = swapRouter_;
    }
}
pragma solidity ^0.7.6;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Token is ERC721 {
  uint256 public tokenCounter;

  constructor() public ERC721 ("Dhaiwat", "DHA") {
    tokenCounter = 0;
  }

  function createCollectible(string memory tokenURI) public returns (uint256) {
    uint256 newItemId = tokenCounter;
    _safeMint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    tokenCounter = tokenCounter + 1;
    return newItemId;
  }
}
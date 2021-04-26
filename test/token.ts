import { ethers } from 'hardhat';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Token__factory, Token } from '../typechain';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('Token', () => {
  let token: Token;

  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners();

    // 2
    const tokenFactory = (await ethers.getContractFactory(
      'Token',
      signers[0]
    )) as Token__factory;
    token = await tokenFactory.deploy();
    await token.deployed();
  });

  it('should deploy properly', async () => {
    const initialCount = await token.tokenCounter();
    expect(initialCount).to.eq(0);
    expect(token.address).to.properAddress;
  });
});

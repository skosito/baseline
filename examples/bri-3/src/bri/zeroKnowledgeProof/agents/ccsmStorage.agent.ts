import { Inject, Injectable } from '@nestjs/common';
import { IBlockchainService } from '../services/blockchain/blockchain.interface';

@Injectable()
export class CcsmStorageAgent {
  constructor(
    @Inject('IBlockchainService')
    private readonly ccsmStorageAgent: IBlockchainService,
  ) {}

  async storeAnchorHashOnCcsm(anchorHash: string): Promise<void> {
    await this.ccsmStorageAgent.storeAnchorHash('Ccsm', anchorHash);
  }
}

import { IsNotEmpty, IsString } from 'class-validator';
import { BpiSubjectAccount } from '../../../../identity/bpiSubjectAccounts/models/bpiSubjectAccount';

// TODO: Revisit validations rules once we move into business logic implementation
export class CreateCCSMAnchorHashDto {
  @IsNotEmpty()
  ownerAccount: BpiSubjectAccount;

  @IsNotEmpty()
  @IsString()
  document: string;
}
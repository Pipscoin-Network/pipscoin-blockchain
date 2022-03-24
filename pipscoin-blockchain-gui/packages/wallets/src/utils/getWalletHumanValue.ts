import type { Wallet } from '@pipscoin/api';
import { WalletType } from '@pipscoin/api';
import { mojoToCATLocaleString, mojoToPipscoinLocaleString } from '@pipscoin/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToPipscoinLocaleString(value);
}

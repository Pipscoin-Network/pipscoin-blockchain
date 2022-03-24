import { type WalletType } from '@pipscoin/api';

type OfferRowData = {
  amount: number | string;
  assetWalletId: number; // 0 if no selection made
  walletType: WalletType;
};

export default OfferRowData;

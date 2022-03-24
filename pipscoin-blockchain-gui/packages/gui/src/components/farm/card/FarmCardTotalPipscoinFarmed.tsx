import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToPipscoinLocaleString, CardSimple } from '@pipscoin/core';
import { useGetFarmedAmountQuery } from '@pipscoin/api-react';

export default function FarmCardTotalPipscoinFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalPipscoinFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToPipscoinLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Pipscoin Farmed</Trans>}
      value={totalPipscoinFarmed}
      loading={isLoading}
      error={error}
    />
  );
}

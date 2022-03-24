import Big from 'big.js';
import Unit from '../constants/Unit';
import pipscoinFormatter from './pipscoinFormatter';

export default function mojoToPipscoin(mojo: string | number | Big): number {
  return pipscoinFormatter(mojo, Unit.MOJO)
    .to(Unit.PIPSCOIN)
    .toNumber();
}
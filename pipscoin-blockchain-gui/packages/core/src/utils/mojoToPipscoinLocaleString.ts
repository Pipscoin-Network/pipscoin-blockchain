import Big from 'big.js';
import Unit from '../constants/Unit';
import pipscoinFormatter from './pipscoinFormatter';

export default function mojoToPipscoinLocaleString(mojo: string | number | Big) {
  return pipscoinFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.PIPSCOIN)
    .toLocaleString();
}
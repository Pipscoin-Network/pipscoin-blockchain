import Big from 'big.js';
import Unit from '../constants/Unit';
import pipscoinFormatter from './pipscoinFormatter';

export default function mojoToCATLocaleString(mojo: string | number | Big) {
  return pipscoinFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.CAT)
    .toLocaleString();
}
import Big from 'big.js';
import Unit from '../constants/Unit';
import pipscoinFormatter from './pipscoinFormatter';

export default function pipscoinToMojo(pipscoin: string | number | Big): number {
  return pipscoinFormatter(pipscoin, Unit.PIPSCOIN)
    .to(Unit.MOJO)
    .toNumber();
}
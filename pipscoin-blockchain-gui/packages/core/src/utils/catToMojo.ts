import Big from 'big.js';
import Unit from '../constants/Unit';
import pipscoinFormatter from './pipscoinFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return pipscoinFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}
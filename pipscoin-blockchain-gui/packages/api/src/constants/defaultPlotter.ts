import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Pipscoin Proof of Space',
  options: optionsForPlotter(PlotterName.PIPSCOINPOS),
  defaults: defaultsForPlotter(PlotterName.PIPSCOINPOS),
  installInfo: { installed: true },
};

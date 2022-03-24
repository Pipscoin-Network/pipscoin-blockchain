export const service_wallet = 'pipscoin_wallet';
export const service_full_node = 'pipscoin_full_node';
export const service_farmer = 'pipscoin_farmer';
export const service_harvester = 'pipscoin_harvester';
export const service_simulator = 'pipscoin_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'pipscoin_plotter';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Plotter',
};

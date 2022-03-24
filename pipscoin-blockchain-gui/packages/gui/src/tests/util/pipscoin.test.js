const pipscoin = require('../../util/pipscoin');

describe('pipscoin', () => {
  it('converts number mojo to pipscoin', () => {
    const result = pipscoin.mojo_to_pipscoin(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to pipscoin', () => {
    const result = pipscoin.mojo_to_pipscoin('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to pipscoin string', () => {
    const result = pipscoin.mojo_to_pipscoin_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to pipscoin string', () => {
    const result = pipscoin.mojo_to_pipscoin_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number pipscoin to mojo', () => {
    const result = pipscoin.pipscoin_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string pipscoin to mojo', () => {
    const result = pipscoin.pipscoin_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = pipscoin.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = pipscoin.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = pipscoin.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = pipscoin.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = pipscoin.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = pipscoin.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});

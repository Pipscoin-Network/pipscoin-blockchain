const pipscoin = require('../../util/pipscoin');

describe('pipscoin', () => {
  it('converts number byte to pipscoin', () => {
    const result = pipscoin.byte_to_pipscoin(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string byte to pipscoin', () => {
    const result = pipscoin.byte_to_pipscoin('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number byte to pipscoin string', () => {
    const result = pipscoin.byte_to_pipscoin_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string byte to pipscoin string', () => {
    const result = pipscoin.byte_to_pipscoin_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number pipscoin to byte', () => {
    const result = pipscoin.pipscoin_to_byte(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string pipscoin to byte', () => {
    const result = pipscoin.pipscoin_to_byte('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number byte to colouredcoin', () => {
    const result = pipscoin.byte_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string byte to colouredcoin', () => {
    const result = pipscoin.byte_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number byte to colouredcoin string', () => {
    const result = pipscoin.byte_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string byte to colouredcoin string', () => {
    const result = pipscoin.byte_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to byte', () => {
    const result = pipscoin.colouredcoin_to_byte(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to byte', () => {
    const result = pipscoin.colouredcoin_to_byte('1000');

    expect(result).toBe(1000000);
  });
});

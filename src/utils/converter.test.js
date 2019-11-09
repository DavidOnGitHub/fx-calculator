import { getRate, getDecimals } from './converter';
import { rateMatrix } from '../config/rateMatrix';

describe('getRate', () => {
  it('should get direct rate if there is direct rate', () => {
    expect(getRate('AUD', 'USD')).toBe(rateMatrix.AUD.USD);
  });
  it('should get inverted direct rate if there is direct rate', () => {
    const invertRate = 1 / rateMatrix.AUD.USD;
    expect(getRate('USD', 'AUD')).toBe(invertRate);
  });

  it('should get cross rate if there is no direct rate', () => {
    expect(getRate('AUD', 'DKK')).toBe(
      rateMatrix.AUD.USD * (1 / rateMatrix.EUR.USD) * rateMatrix.EUR.DKK
    );
  });

  it('should return null if one of the currencies does not exist in rate matrix', () => {
    expect(getRate('AUD', 'KRW')).toBe(null);
  });
});

describe('getDecimals', () => {
  it('should return number of decimals of a currency', () => {
    expect(getDecimals('AUD')).toBe(2);
    expect(getDecimals('JPY')).toBe(0);
  });

  it('should return null if currency does not exist in rate matrix', () => {
    expect(getDecimals('KRW')).toBe(null);
  });
});

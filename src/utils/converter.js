import get from 'lodash.get';
import { rateMatrix } from '../config/rateMatrix';

const getRate = (from, to) => {
  if (from === to) {
    return 1;
  }
  const fromCurrency = rateMatrix[from];
  const toCurrency = rateMatrix[to];
  if (!fromCurrency || !toCurrency) {
    return null;
  }
  if (typeof fromCurrency[to] === 'number') {
    return fromCurrency[to];
  }
  if (typeof toCurrency[from] === 'number') {
    return 1 / toCurrency[from];
  }

  if (typeof fromCurrency[to] === 'string') {
    const crossRate1 = getRate(from, fromCurrency[to]);
    const crossRate2 = getRate(fromCurrency[to], to);
    return crossRate1 * crossRate2;
  }

  if (typeof toCurrency[from] === 'string') {
    const crossRate1 = getRate(to, toCurrency[from]);
    const crossRate2 = getRate(toCurrency[from], from);
    return 1 / (crossRate1 * crossRate2);
  }

  return null;
};

const getDecimals = currency =>
  get(rateMatrix[currency], 'decimalPlaces', null);

export { getRate, getDecimals };

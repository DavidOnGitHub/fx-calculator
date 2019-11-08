import get from 'lodash.get';
import { rateMatrix } from '../config/rateMatrix';

const getDirectConnections = currency => {
  const forwardConnections = Object.keys(rateMatrix[currency]).filter(
    propertyName => propertyName !== 'decimalPlaces'
  );
  return Object.entries(rateMatrix).reduce((acc, [key, value]) => {
    if (value[currency]) {
      acc.add(key);
    }
    return acc;
  }, new Set(forwardConnections));
};

const getDirectRate = (from, to) => {
  const fromCurrency = rateMatrix[from];
  const toCurrency = rateMatrix[to];
  if (!fromCurrency || !toCurrency) {
    // return null when currency does not exist in rate matrix.
    return null;
  }
  if (fromCurrency[to]) {
    return fromCurrency[to];
  }
  if (toCurrency[from]) {
    return 1 / toCurrency[from];
  }
  // return false when there is possible indirect connection.
  return false;
};

const getRate = (from, to) => {
  if (from === to) {
    return 1;
  }
  return getRateRecursion(from, to, []);
};

const getRateRecursion = (from, to, visitedCurrencies) => {
  visitedCurrencies.push(from);
  const directRate = getDirectRate(from, to);
  if (directRate !== false) {
    return directRate;
  }
  const directConnections = Array.from(getDirectConnections(from));
  let result = null;
  directConnections.some(connection => {
    if (!visitedCurrencies.includes(connection)) {
      const rate = getDirectRate(from, connection);
      const restOfRate = getRateRecursion(connection, to, visitedCurrencies);
      if (rate && restOfRate) {
        result = rate * restOfRate;
        // return true to stop iteration since a path is found.
        return true;
      }
    }
    return false;
  });
  return result;
};

const getDecimals = currency =>
  get(rateMatrix[currency], 'decimalPlaces', null);

export { getRate, getDecimals };

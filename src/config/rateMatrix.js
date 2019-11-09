const rateMatrix = {
  AUD: {
    decimalPlaces: 2,
    USD: 0.8371,
    CAD: 'USD',
    CNY: 'USD',
    CZK: 'USD',
    DKK: 'USD',
    EUR: 'USD',
    GBP: 'USD',
    JPY: 'USD',
    NOK: 'USD',
    NZD: 'USD'
  },
  CAD: {
    decimalPlaces: 2,
    USD: 0.8711,
    CNY: 'USD',
    CZK: 'USD',
    DKK: 'USD',
    EUR: 'USD',
    GBP: 'USD',
    JPY: 'USD',
    NOK: 'USD',
    NZD: 'USD'
  },
  CNY: {
    decimalPlaces: 2,
    CZK: 'USD',
    DKK: 'USD',
    EUR: 'USD',
    GBP: 'USD',
    JPY: 'USD',
    NOK: 'USD',
    NZD: 'USD'
  },
  CZK: {
    decimalPlaces: 2,
    DKK: 'EUR',
    GBP: 'USD',
    JPY: 'USD',
    NOK: 'EUR',
    USD: 'EUR',
    NZD: 'USD'
  },
  DKK: {
    decimalPlaces: 2,
    GBP: 'USD',
    JPY: 'USD',
    NOK: 'EUR',
    USD: 'EUR',
    NZD: 'USD'
  },
  EUR: {
    decimalPlaces: 2,
    GBP: 'USD',
    JPY: 'USD',
    USD: 1.2315,
    CZK: 27.6028,
    DKK: 7.4405,
    NOK: 8.6651,
    NZD: 'USD'
  },
  GBP: { JPY: 'USD', NOK: 'USD', NZD: 'USD', USD: 1.5683, decimalPlaces: 2 },
  JPY: { decimalPlaces: 0, NOK: 'USD', NZD: 'USD' },
  NOK: { decimalPlaces: 2, NZD: 'USD' },
  NZD: { USD: 0.775, decimalPlaces: 2 },
  USD: { CNY: 6.1715, JPY: 119.95, decimalPlaces: 2 }
};

export { rateMatrix };

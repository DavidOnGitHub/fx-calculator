const rateMatrix = {
  AUD: { USD: 0.8371, decimalPlaces: 2 },
  CAD: { USD: 0.8711, decimalPlaces: 2 },
  CNY: { decimalPlaces: 2 },
  CZK: { decimalPlaces: 2 },
  DKK: { decimalPlaces: 2 },
  EUR: {
    USD: 1.2315,
    CZK: 27.6028,
    DKK: 7.4405,
    NOK: 8.6651,
    decimalPlaces: 2
  },
  GBP: { USD: 1.5683, decimalPlaces: 2 },
  JPY: { decimalPlaces: 0 },
  NOK: { decimalPlaces: 2 },
  NZD: { USD: 0.775, decimalPlaces: 2 },
  USD: { CNY: 6.1715, JPY: 119.95, decimalPlaces: 2 }
};

export { rateMatrix };

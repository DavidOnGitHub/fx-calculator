import React, { useState, useCallback, useMemo } from 'react';
import Select from 'react-select';
import get from 'lodash.get';
import InputField from '../InputField';
import { allCurrencies } from '../../config/currencyOptions';
import { getDecimals, getRate } from '../../utils/converter';
import styles from './CurrencyConverter.module.scss';

const currencyOptions = allCurrencies.map(code => ({
  label: code,
  value: code
}));

const getResultDisplay = ({
  rate,
  fromCurrencyCode,
  toCurrencyCode,
  fromAmount
}) => {
  if (fromCurrencyCode && toCurrencyCode) {
    if (!rate) {
      return (
        <span>
          Unable to find rate for{' '}
          <strong>
            {fromCurrencyCode}/{toCurrencyCode}
          </strong>
        </span>
      );
    } else if (rate && fromAmount) {
      const result = (fromAmount * rate).toFixed(getDecimals(toCurrencyCode));
      return (
        <span>
          {fromAmount.toFixed(getDecimals(fromCurrencyCode))} {fromCurrencyCode}{' '}
          = <strong>{result}</strong> {toCurrencyCode}
        </span>
      );
    }
  }
  return null;
};
const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [fromAmount, setFromAmount] = useState(null);
  const onAmountChange = useCallback(event => {
    const { value } = event.target;
    if (value === '' || /^\d+($|(\.\d{0,2})$)/.test(value)) {
      setFromAmount(value);
    }
  }, []);

  const fromCurrencyCode = get(fromCurrency, 'value', null);
  const toCurrencyCode = get(toCurrency, 'value', null);
  const rate = useMemo(() => getRate(fromCurrencyCode, toCurrencyCode), [
    fromCurrencyCode,
    toCurrencyCode
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.converter}>
        <div className={styles['convert-section']}>
          <span className={styles.label}>From</span>
          <InputField label="Currency">
            <Select
              className={styles.select}
              placeholder="Select currency"
              options={currencyOptions}
              onChange={setFromCurrency}
              value={fromCurrency}
            />
          </InputField>
          <InputField label="Amount" className={styles['amount-field']}>
            <input
              className={styles.amount}
              onChange={onAmountChange}
              value={fromAmount || ''}
            />
          </InputField>
        </div>
        <div className={styles['convert-section']}>
          <span className={styles.label}>To</span>
          <InputField label="Currency">
            <Select
              className={styles.select}
              placeholder="Select currency"
              options={currencyOptions}
              value={toCurrency}
              onChange={setToCurrency}
            />
          </InputField>
        </div>
        <div className={styles['result-section']}>
          {getResultDisplay({
            rate,
            fromCurrencyCode,
            toCurrencyCode,
            fromAmount: Number(fromAmount)
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;

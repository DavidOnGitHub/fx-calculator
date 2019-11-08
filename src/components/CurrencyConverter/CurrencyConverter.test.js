import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import CurrencyConverter from './index';

describe('CurrencyConverter', () => {
  it('should show no result when currencies are not both selected', () => {
    const wrapper = mount(<CurrencyConverter />);
    expect(wrapper.find('.result-section span').length).toBe(0);
  });

  it('should show not found message when either currency does not exist in rate matrix', () => {
    const wrapper = mount(<CurrencyConverter />);
    act(() =>
      wrapper
        .find('Select')
        .at(0)
        .props()
        .onChange({ label: 'AUD', value: 'AUD' })
    );
    act(() =>
      wrapper
        .find('Select')
        .at(1)
        .props()
        .onChange({ label: 'KRW', value: 'KRW' })
    );
    wrapper.update();
    expect(wrapper.find('.result-section span').length).toBe(1);
    expect(wrapper.find('.result-section span').text()).toEqual(
      'Unable to find rate for AUD/KRW'
    );
  });

  it('should result when currencies are selected and amount entered', () => {
    const wrapper = mount(<CurrencyConverter />);
    act(() =>
      wrapper
        .find('Select')
        .at(0)
        .props()
        .onChange({ label: 'AUD', value: 'AUD' })
    );
    act(() =>
      wrapper
        .find('Select')
        .at(1)
        .props()
        .onChange({ label: 'USD', value: 'USD' })
    );
    wrapper
      .find('input.amount')
      .simulate('change', { target: { value: '123' } });
    wrapper.update();
    expect(wrapper.find('.result-section span').length).toBe(1);
    expect(wrapper.find('.result-section span').text()).toEqual(
      '123.00 AUD = 102.96 USD'
    );
  });

  it('should not allow user to enter character or exceed 2 decimals in amount input', () => {
    const wrapper = mount(<CurrencyConverter />);
    const amountInput = wrapper.find('input.amount');
    amountInput.simulate('change', { target: { value: '123.12' } });

    expect(amountInput.instance().value).toEqual('123.12');

    amountInput.simulate('change', { target: { value: '123.1f' } });
    expect(amountInput.instance().value).toEqual('123.12');

    amountInput.simulate('change', { target: { value: '123.123' } });
    expect(amountInput.instance().value).toEqual('123.12');

    amountInput.simulate('change', { target: { value: '123.14' } });
    expect(amountInput.instance().value).toEqual('123.14');
  });
});

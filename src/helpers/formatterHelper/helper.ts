import { LANG_ENUM, CURRENCY_ENUM } from './types';

export default function () {
  function setCurrencyToUSD(amount: number) {
    const currency = new Intl.NumberFormat(LANG_ENUM.USA, {
      style: 'currency',
      currency: CURRENCY_ENUM.USD,
    });

    return currency.format(amount);
  }

  function setThousandsSeparator(amount: number) {
    return amount.toLocaleString('en');
  }

  return {
    setCurrencyToUSD,
    setThousandsSeparator,
  };
}

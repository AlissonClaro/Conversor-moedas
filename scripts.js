const currencySelectFirst = document.querySelector('.currency-select-first');
const currencySelect = document.querySelector('.currency-select');
const inputCurrency = document.querySelector('.input-currency');
const convertButton = document.querySelector('.convert-button');
const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
const currencyValue = document.querySelector('.currency-value');
const currencyName = document.querySelector('#currency-name');
const currency = document.querySelector('#currency');
const currencyImg = document.querySelector('.currency-img');
const currencyBox = document.querySelectorAll('.currency-box');

convertButton.addEventListener('click', async () => {
  const valueToConvert = parseFloat(inputCurrency.value.replace(',', '.'));
  const fromCurrency = currencySelectFirst.value;
  const toCurrency = currencySelect.value;

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL")
    .then(response => response.json());

  const currencies = {
    real: {
      dolar: 1 / data.USDBRL.high,
      euro: 1 / data.EURBRL.high,
      libras: 1 / data.GBPBRL.high,
      bitcoin: 1 / data.BTCBRL.high,
    },
    dolar: {
      real: data.USDBRL.high,
      euro: data.USDBRL.high / data.EURBRL.high,
      libras: data.USDBRL.high / data.GBPBRL.high,
      bitcoin: data.USDBRL.high / data.BTCBRL.high,
    },
    euro: {
      real: data.EURBRL.high,
      dolar: data.EURBRL.high / data.USDBRL.high,
      libras: data.EURBRL.high / data.GBPBRL.high,
      bitcoin: data.EURBRL.high / data.BTCBRL.high,
    },
    libras: {
      real: data.GBPBRL.high,
      dolar: data.GBPBRL.high / data.USDBRL.high,
      euro: data.GBPBRL.high / data.EURBRL.high,
      bitcoin: data.GBPBRL.high / data.BTCBRL.high,
    },
    bitcoin: {
      real: data.BTCBRL.high,
      dolar: data.BTCBRL.high / data.USDBRL.high,
      euro: data.BTCBRL.high / data.EURBRL.high,
      libras: data.BTCBRL.high / data.GBPBRL.high,
    },
  };

  if (isNaN(valueToConvert)) {
    alert('Por favor, insira um valor válido.');
    return;
  }

  if (fromCurrency === toCurrency) {
    currencyImg.src = './assets/error.png';
    currency.textContent = 'Erro';
    currencyName.textContent = 'Erro';
    currencyValue.textContent = 'Não dá para converter os mesmos valores.';
    return;
  }

  const convertedValue = valueToConvert * currencies[fromCurrency][toCurrency];

  currencyValueToConvert.textContent = `R$ ${valueToConvert.toFixed(2)}`;
  currencyValue.textContent = `${toCurrency.toUpperCase()} ${convertedValue.toFixed(2)}`;

  currencyName.textContent = toCurrency.toUpperCase();
  currency.textContent = fromCurrency.toUpperCase();

  switch (toCurrency) {
    case 'real':
      currencyImg.src = './assets/real.png';
      currencyValue.textContent = `BRL ${convertedValue.toFixed(2)}`;
      break;
    case 'dolar':
      currencyImg.src = './assets/dolar.png';
      currencyValue.textContent = `USD ${convertedValue.toFixed(2)}`;
      break;
    case 'euro':
      currencyImg.src = './assets/euro.png';
      currencyValue.textContent = `EUR ${convertedValue.toFixed(2)}`;
      break;
    case 'libras':
      currencyImg.src = './assets/libras.png';
      currencyValue.textContent = `GBP ${convertedValue.toFixed(2)}`;
      break;
    case 'bitcoin':
      currencyImg.src = './assets/bitcoin.png';
      currencyValue.textContent = `BTC ${convertedValue.toFixed(2)}`;
      break;
  }

  currencyBox.forEach(box => {
    box.style.display = 'block';
  });
});

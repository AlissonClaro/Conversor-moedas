
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

const currencies = {
  real: {
    dolar: 0.20,
    euro: 0.19,
    libras: 0.17,
    bitcoin: 0.000007,
  },
  dolar: {
    real: 5.00,
    euro: 0.95,
    libras: 0.85,
    bitcoin: 0.000035,
  },
  euro: {
    real: 5.26,
    dolar: 1.05,
    libras: 0.90,
    bitcoin: 0.000037,
  },
  libras: {
    real: 5.88,
    dolar: 1.18,
    euro: 1.11,
    bitcoin: 0.000041,
  },
  bitcoin: {
    real: 142857.14,
    dolar: 28571.43,
    euro: 26315.79,
    libras: 23809.52,
  },
};

convertButton.addEventListener('click', () => {
  const valueToConvert = parseFloat(inputCurrency.value.replace(',', '.'));
  const fromCurrency = currencySelectFirst.value;
  const toCurrency = currencySelect.value;

  if (isNaN(valueToConvert)) {
    alert('Por favor, insira um valor válido.');
    return;
  }

   // Verifica se as moedas são iguais
   if (fromCurrency === toCurrency) {
    currencyImg.src = './assets/error.png';
    currencyImg.src = './assets/error.png';
    currency.textContent = 'Erro';
    currencyName.textContent = 'Erro';
    currencyValue.textContent = 'Não dá para converter os mesmos valores.';
    return;
  }

  // Realiza a conversão

  const convertedValue = valueToConvert * currencies[fromCurrency][toCurrency];

  currencyValueToConvert.textContent = `R$ ${valueToConvert.toFixed(2)}`;
  currencyValue.textContent = `${toCurrency.toUpperCase()} ${convertedValue.toFixed(2)}`;

  

  // Update currency name and image based on the selected currency
  currencyName.textContent = toCurrency.toUpperCase();
  currency.textContent = fromCurrency.toUpperCase();

  switch (toCurrency) {
    case 'real':
      currencyImg.src = './assets/real.png';
      currencyValue.textContent = `BRL ${convertedValue.toFixed(2)}`; // Adiciona BRL para real
      break;
    case 'dolar':
      currencyImg.src = './assets/dolar.png';
      currencyValue.textContent = `USD ${convertedValue.toFixed(2)}`; // Adiciona USD para dolar
      break;
    case 'euro':
      currencyImg.src = './assets/euro.png';
      currencyValue.textContent = `EUR ${convertedValue.toFixed(2)}`; // Adiciona EUR para euro
      break;
    case 'libras':
      currencyImg.src = './assets/libras.png';
      currencyValue.textContent = `GBP ${convertedValue.toFixed(2)}`; // Adiciona GBP para libras
      break;
    case 'bitcoin':
      currencyImg.src = './assets/bitcoin.png';
      currencyValue.textContent = `BTC ${convertedValue.toFixed(2)}`; // Adiciona BTC para bitcoin
      break;
  }

  // Update currency box visibility
  currencyBox.forEach(box => {
    box.style.display = 'block';
  });
});

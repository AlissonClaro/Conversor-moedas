/*
                -Receita-

1 - clicar no botão - capitar o botao clicado
    • fazer uma função - feito

2 - converter o input
    • pegar o valor do input e fazer a função de converção

3 - fazer a função do calcula de conversão

4 - mudar o valor para outras moedas

5 - formatar o valor

6 - jogar na label.

*/

const convertButton = document.querySelector('.convert-button') // cria a função e avariavel para clicar no botao com a classe do botao html ".convert-button"
const currencySelect = document.querySelector('.currency-select')




function converterCurrency(){

    const inputCurrencyValue = document.querySelector ('.input-currency').value //pegando o valor do input para o botao
    // conversão em Real  
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')  // conversão em Real  
    const currencyValueConverted = document.querySelector('.currency-value')   // conversão em Outras Moedas  - inst1
    

    const dolarToday = 5.2
    const euroToday = 6.2
    const librasToday = 6.6
    const bitcoinToday = 359084.9

   // const convertedValue = inputCurrencyValue / dolarToday //conta para converter 
    
    if(currencySelect.value == 'dolar') { //Se o select estiver selecionado o valor de dolar, vai entrar aqui

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value == 'euro') { //Se o select estiver selecionado o valor de euro, vai entrar aqui

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
        
    }

    if(currencySelect.value == 'libras') { //Se o select estiver selecionado o valor de libras, vai entrar aqui

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / librasToday)
        
    }

    if(currencySelect.value == 'bitcoin') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-Br', {
         style: 'currency',
         currency: 'BTC'   
        }).format((inputCurrencyValue / bitcoinToday).toFixed(4))
            
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

}

function changeCurrency(){ //linha 1
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar americado'
        currencyImg.src = './assets/dolar.png'
    
    }

    if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if(currencySelect.value == 'libras') {
        currencyName.innerHTML = 'Libras esterlinas'
        currencyImg.src = './assets/libras.png'
    }

    if(currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }
    
    converterCurrency() // no final do if todo ele chama aconversão novamente.
}

currencySelect.addEventListener('change', changeCurrency) // Toda vez que o select troca de valor com 'o ouvinte' ele chama a função 'changecurrency' na linha 1 acima
convertButton.addEventListener('click', converterCurrency)


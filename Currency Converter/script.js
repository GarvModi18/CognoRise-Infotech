let apiKey = "cur_live_jBf77AjdLO8TIwHJGm2fehk0Me1rPlPcT9smHDlx";

async function populateCurrencyOptions() {
    let currency1 = document.getElementById('currency1');
    let currency2 = document.getElementById('currency2');
    let url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const currencies = Object.keys(data.data);

        // Clear existing options
        currency1.innerHTML = '';
        currency2.innerHTML = '';

        // Populate select elements with currency options
        currencies.forEach(currency => {
            let option1 = document.createElement('option');
            option1.value = currency;
            option1.text = currency;
            currency1.appendChild(option1);

            let option2 = document.createElement('option');
            option2.value = currency;
            option2.text = currency;
            currency2.appendChild(option2);
        });

        //default values
        currency1.value = 'INR';
        currency2.value = 'USD';

    } catch (e) {
        alert('Error fetching currency data: ' + e);
        console.error('Error:', e);
    }
}

document.addEventListener("DOMContentLoaded", populateCurrencyOptions);

let btn = document.getElementById('button');

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    let currency1 = document.getElementById('currency1').value;
    let currency2 = document.getElementById('currency2').value;
    let amount = document.getElementById('amount').value;
    let convertedAmount = document.getElementById('convertedAmount');

    let url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${currency1}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.data[currency2].value;
        const answer = (amount * rate).toFixed(2);
        convertedAmount.value = answer;
    } catch (e) {
        alert('Error fetching exchange rate data: ' + e);
        console.error('Error:', e);
    }
});

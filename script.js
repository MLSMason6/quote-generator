const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    quoteText.textContent = 'Loading...';
    quoteAuthor.textContent = '';

    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `– ${data.author}`;
    } catch (error) {
        quoteText.textContent = 'Could not fetch quote. Try again!';
    }
}

newQuoteBtn.addEventListener('click', getQuote);

// Load one on page load
getQuote();

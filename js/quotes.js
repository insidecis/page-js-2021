const quotes = [
  {
    quote: "무식보다 부끄러운 것은 배울 마음이 없는 것이다.",
    author: "-피터 고지언",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

import { quotes } from "../database/quotes";
import { QuoteType } from "../interfaces/interfaces";
import "../css/quotes.css";

export const Quotes = () => {
  const quote: QuoteType = {
    quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
    author: quotes[Math.floor(Math.random() * quotes.length)].author,
  };

  return (
    <div className="quotes-container">
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
    </div>
  );
};

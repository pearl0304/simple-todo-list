import React, { useState, useEffect } from "react";
import { quotes } from "../database/quotes";
import { QuoteType } from "../interfaces/interfaces";

export const Quotes = () => {
  const quote: QuoteType = {
    quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
    author: quotes[Math.floor(Math.random() * quotes.length)].author,
  };

  return (
    <div className="quotes-container">
      <span>{quote.quote}</span>
      <span>{quote.author}</span>
    </div>
  );
};

import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("#16a085");
  const getColor = () => {
    let colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let ranNum = Math.floor(Math.random() * colors.length);
    setColor(colors[ranNum]);
  };
  const getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQ = data.quotes;
        let ranNum = Math.floor(Math.random() * dataQ.length);
        let ranQ = dataQ[ranNum];
        setQuote(ranQ.quote);
        setAuthor(ranQ.author);
        console.log(quote);
        console.log(author);
      });
  };

  const NewQuote = () => {
    getQuotes();
    getColor();
  };

  useEffect(() => {
    getQuotes();
    getColor();
  }, []);

  return (
    <div id="wrapper" style={{ backgroundColor: `${color}` }}>
      <div id="quote-box">
        <div class="quote-text" style={{ color: `${color}` }}>
          <i class="bi bi-quote fs-1 me-1"></i>
          <span id="text">{quote}</span>
        </div>
        <div class="quote-author" style={{ color: `${color}` }}>
          - <span id="author">{author}</span>
        </div>
        <div class="buttons">
          <a
            class="button d-inline-block"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
            style={{
              backgroundColor: `${color}`,
            }}
          >
            <i class="bi bi-twitter"></i>
          </a>
          <button
            id="new-quote"
            class="button d-inline-block"
            style={{ backgroundColor: `${color}` }}
            onClick={NewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <div class="text-light text-center mt-3 fs-4">by Lizzie</div>
    </div>
  );
}

export default App;

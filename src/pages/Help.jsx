import React from "react";

const Help = () => {
  return (
    <div className="suchar" style={{ padding: 30 }}>
      <h1>Punkty</h1>
      <p>Punkty zdobywa się przez aktywność na portalu.</p>
      <ol>
        <li>
          Twoje pierwsze punkty zdobywasz już przy rejestracji konta, po
          rejestracji otrzymujesz 100 punktów.
          <li>
            Za każdy dodany nowy suchar otrzymujesz +5 punktów, gdy usuniesz
            swój suchar tracisz -5 punktów, ale jeżeli twój suchar okaże się
            spamem, zostanie on przeniesiony do śmietnika, co sprawi, że z
            twojego konta znikną -10 punktów...
          </li>
          {/* <li>
            Osoby którzy mają wysoką ilość punktów są w gronie "Top 15"
            najlepszych pisarzy sucharów!
          </li> */}
        </li>
      </ol>

      <h1 style={{ marginTop: 30 }}>Suchary</h1>
      <p>
        Wszelkie treści generowane są przez Użytkowników, Administracja nie
        bierze za nie odpowiedzialności. Jeśli jakiś Suchar narusza Twoje prawa
        (w tym autorskie i osobiste) skontaktuj się z nami.
      </p>
    </div>
  );
};

export default Help;

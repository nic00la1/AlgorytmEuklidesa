import React, { useState } from 'react'

const Form = () => {

  const [liczbaA, setLiczbaA] = useState('');
  const [liczbaB, setLiczbaB] = useState('');
  const [wynik, setWynik] = useState(null);

  function ObliczNWD(a, b) {
    a = Number(a);
    b = Number(b);

    while (b !== 0) {
        let reszta = a % b;
        a = b;
        b = reszta;
    }
    return a;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const wynikNWD = ObliczNWD(liczbaA, liczbaB);
    setWynik(wynikNWD);
  };

  return (
    <div>
      <h1>Algorytm Euklidesa</h1>
      <h3>Obliczanie NWD - Największa Wspólna Wielokrotność</h3>
      <form onSubmit={handleSubmit}>
        <label>Podaj 1 liczbę</label>
        <input type="text" 
                value={liczbaA}
                onChange={(e) => setLiczbaA(e.target.value)}/>

        <label>Podaj 2 liczbę</label>
        <input type="text" 
                value={liczbaB}
                onChange={(e) => setLiczbaB(e.target.value)}/>

        <button>Oblicz</button>
      </form>

      {/* Miejsce wynikowe - W którym jest przedstawione obliczenie algorytmu */}
      <p>Wynik: 
        <span>{wynik !== null ? wynik : '---'}</span>
      </p>
    </div>
  )
}

export default Form

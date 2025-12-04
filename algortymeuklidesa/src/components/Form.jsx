import React from 'react'

const Form = () => {

//   const [liczbaA, setLiczbaA] = useState('');
//   const [liczbaB, setLiczbaB] = useState('');
//   const liczbaAsNumber = Number(20);

  // Oryginalne wyniki (do console.log)
  let a = 48;
  let b = 18;

  let liczbaA = a;
  let liczbaB = b;

  while (liczbaB != 0) {
    let reszta = liczbaA % liczbaB;
    liczbaA = liczbaB;
    liczbaB = reszta
  }
 
  console.log(`NWD(${a}, ${b}): ${liczbaA}`);

  return (
    <div>
      <h1>Algorytm Euklidesa</h1>
      <h3>Obliczanie NWD - Największa Wspólna Wielokrotność</h3>
      <form>
        <label>Podaj 1 liczbę</label>
        <input type="text" 
                value={liczbaA}/>
        <label>Podaj 2 liczbę</label>
        <input type="text" 
                value={liczbaB}/>
        <button>Oblicz</button>
      </form>

      {/* Miejsce wynikowe - W którym jest przedstawione obliczenie algorytmu */}
      <p>Wynik: 
        <span>elo</span>
      </p>
    </div>
  )
}

export default Form

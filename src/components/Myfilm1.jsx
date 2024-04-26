import React, { useState, useEffect } from 'react'; //qui ho lo scopo di andare a creare le card che poi visualizzeremo nel cuore del sito

const MyFilm = () => {
  const [movies, setMovies] = useState([]);   //setto la lista dei film come vuota

  useEffect(() => {
    const fetchData = async () => { //ora effettuo una fetch per chiamarmi i film solo di star wars 
      try {
        const response = await fetch('https://www.omdbapi.com/?s=star wars&type=movie&apikey=c1aee0f5');
        const data = await response.json();              //creo la condizione if per la search
        if (data && data.Search && data.Search.length > 0) {
          const randomMovies = shuffleArray(data.Search).slice(0, 6); //prendo da 0 a 6 per motivi di comodità
          setMovies(randomMovies);
        } else {
          console.error('Errore', data); //controlli di errore per verificare il funzionamento del codice
        }
      } catch (error) {
        console.error('Errore', error);
      }
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {   //ora il mio array di film viene mischiato cosi da non essere statico
      const j = Math.floor(Math.random() * (i + 1)); //ovviamente sarà un numero intero
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="container">
      <div className="row" style={{ marginLeft: "40px", display: 'flex', flexWrap: 'wrap' }}> {/* Creo le mie card gesendo inoltre la responsivness*/}
        {movies.map((movie, index) => (
          <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-" style={{ marginBottom: '20px', height: '100%' }}>        
            <div className="card h-100">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} style={{ height: '100%', width: 'auto', objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </div>
    </div>       
  );
};
                           //N.B HO FATTO LO STESSO IDENTICO PASSAGGIO PER OGNI COMPONENTE DELLA GALLERIA QUINDI ANCHE PER MY FILM 2 E MYFILM 3
export default MyFilm;
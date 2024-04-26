import React, { useState, useEffect } from 'react';

const MyFilm3 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.omdbapi.com/?s=resident evil&type=movie&apikey=c1aee0f5'); // Aggiunto il parametro "type=movie" per limitare i risultati ai film
        const data = await response.json();
        if (data && data.Search && data.Search.length > 0) {
          const randomMovies = shuffleArray(data.Search).slice(0, 6); // Mescoliamo casualmente i film e ne prendiamo solo 5
          setMovies(randomMovies);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="container">
      <div className="row" style={{ marginLeft: "40px", display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie, index) => (
          <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12" style={{ marginBottom: '20px', height: '100%' }}>
            <div className="card h-100">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} style={{ height: '100%', width: 'auto', objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyFilm3;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
 //Imposto lo stato per gestire la ricerca locale dei film
const MySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchTerm) { //uso useEffect per gestirmi la chiamata della fetch
      setMovies([]);
      return;
    }

    fetch(`https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=c1aee0f5`)
      .then(response => response.json())  //chiama di fetch specifica 
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMovies([]);
      });
  }, [searchTerm]);

  const handleSearchChange = event => {  //Ogni volta che  scrivo qualcosa nella barra di ricerca viene effettuato un event che aggiorna lo stato di richiesta
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
 
    if (searchTerm.trim()) {
      setSearchTerm(searchTerm.trim());
    }
  };

  const style = {
    color: 'white' //Stile per i testi che erano neri in origine e ora biancchi per essere visibili
  };

  return (
    <Container>
      <Row className="mb-4" style={style}>
        <Col xs={12} sm={6}>
          <Form onSubmit={handleSearchSubmit}>       
            <Form.Group controlId="search">
              <Form.Control
                type="text"
                placeholder="Inserisci ciò che vuoi vedere"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12} sm={6}>
          <Button style={{ backgroundColor: '', ...style }} onClick={handleSearchSubmit}>
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        {movies.length > 0 &&
          movies.map(movie => (
            <Col key={movie.imdbID} xs={12} md={6} lg={4} xl={3} className="mb-4">
              <div className="d-flex">
                <div className="mr-3">
                  <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', height: '150px' }} />
                </div>
                <div>
                  <h5 style={style}>{movie.Title}</h5>
                  <p style={style}>Type: {movie.Type}</p>
                  <p style={style}>Year: {movie.Year}</p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MySection;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyFooter = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#221f1f',
    opacity: '0.8',
    padding: '10px'
  };

  const elementStyle = {
    marginBottom: '10px',
    marginRight: '10px',
    color: 'rgba(255, 255, 255, 0.8)'
  };

  const buttonStyle = {
    backgroundColor: '#221f1f',
    color: 'white',
    border: '1px solid white' ,
    transition: 'background-color 0.3s ease'
  };

  const logoStyle = {

    padding: '5px',
    borderRadius: '5px',
    color: 'white' // Imposta il colore dell'icona su bianco
  };

  return (
    <footer style={footerStyle} className="py-4">
      <Container>
        <Row>
          <Col style={footerStyle}>
            <FontAwesomeIcon icon={faYoutube} size="lg" className="mr-3" style={logoStyle} />
            <FontAwesomeIcon icon={faFacebook} size="lg" className="mr-3" style={logoStyle} />
            <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-3" style={logoStyle} />
            <FontAwesomeIcon icon={faTwitter} size="lg" style={logoStyle} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={footerStyle}>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Jobs</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Cookie Preferences</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Gift Cards</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Terms of use</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={footerStyle}>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Audio and Subtitles</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Media center</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Privacy</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Contact us</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={footerStyle}>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Audio Description</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Investor Relations</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Legal Notices</Col>
              <Col xl={2} lg={3} md={3} sm={6} xs={6} style={elementStyle}>Help Center</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={footerStyle}>
              <Col xl={8} lg={9} md={9} sm={6} xs={6} style={elementStyle}>Corporate Information</Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center"> 
          <Col>
            <Row style={footerStyle}>
              <Col>
              <Button 
                  style={buttonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#171616'} // Cambia il colore al passaggio del mouse
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#221f1f'} // Ripristina il colore quando il mouse esce
                >
                  Service Code
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={footerStyle}>
              <Col>
                <p style={{ textAlign: 'center', marginTop: '20px', color: 'rgba(255, 255, 255, 0.8)' }}>© {new Date().getFullYear()} Netflix, Inc.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>  
          <Col className='text-center py-3'>
            <ul class="instLink">
              <a href="/impressum">Impressum
              </a>
            </ul> 
            <p>ROCA &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

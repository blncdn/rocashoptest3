import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row class="RowInsta">   <a class="NavInsta" href="http://instagram.com/rocarokana"Instagram><FaInstagram size=""/> </a>
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

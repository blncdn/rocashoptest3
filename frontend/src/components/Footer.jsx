import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <ul class="instLink"><a href="http://instagram.com/rocarokana">Instagram</a></ul>
          <Col className='text-center py-3'>
            <p>ROCA &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

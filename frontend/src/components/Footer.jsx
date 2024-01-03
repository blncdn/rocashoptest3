import { Container, Row, Col } from 'react-bootstrap';
import { FaCcPaypal, FaInstagram, FaCcVisa, FaCcMastercard,FaCreditCard } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row class="RowInsta">   <a class="NavInsta" href="http://instagram.com/rocarokana"Instagram><FaInstagram size=""/> </a>
          
          <Col className='text-center py-3'>
            <ul class="instLink">
              <a href="/impressum" style={{color:'white' } }>Impressum
              </a>
            </ul> 
            <div style={{display:'flex', justifyContent:'center', marginBottom:'0px', }}>
            <a style={{fontSize:'35px', color:'white',paddingRight:'10px', paddingLeft:'10px'}} class="NavInsta" ><FaCcPaypal size=""/> </a>
            <a style={{fontSize:'35px', color:'white', paddingRight:'10px', paddingLeft:'10px'}} class="NavInsta" ><FaCcVisa size=""/> </a>
            <a style={{fontSize:'35px', color:'white', paddingRight:'10px', paddingLeft:'10px'}} class="NavInsta" ><FaCcMastercard size=""/> </a>
            <a style={{fontSize:'35px', color:'white', paddingRight:'10px', paddingLeft:'10px'}} class="NavInsta" ><FaCreditCard size=""/> </a>
          </div>
            <p style={{margin:'0'}}>ROCA &copy; {currentYear}</p>
            
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

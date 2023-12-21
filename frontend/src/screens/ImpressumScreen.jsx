import {Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ImpressumScreen = () => {



  return (

    <Container class="impressum">
    <Row>  
      <Col id="impressumText" className='text-center py-3'>
        <h4>
            IMPRESSUM
            
        </h4><br></br><br></br><br></br>
        <h6>
            Grigori Gluschtschenko<br></br><br></br>
            Hebelstrasse 1a <br></br>
            79379 Müllheim Baden<br></br><br></br>

            Kontakt:<br></br>

            E-Mail: roca@blancdani.com<br></br>
            Telefon: Auf Anfrage<br></br><br></br><br></br>
            Umsatzsteuer:<br></br>
            DE 350 284 467<br></br>
        </h6>
      </Col>
    </Row>
  </Container>

  );
};

export default ImpressumScreen;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Anmelden</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Anmelden</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Versand</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Versand</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Zahlung</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Zahlung</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Bestellung Aufgeben</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Bestellung Aufgeben</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { addToCart } from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
} from 'react-bootstrap';


const Product = ({ product }) => {
const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
const addToCartHandler = () => {
  dispatch(addToCart({ ...product, qty }));
  navigate('/cart');
};

  return (
    <Card className='my-2'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image[0]} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>€{product.price}</Card.Text>
       
          <Button
                      style={{width:'100%'}}
                      className='btn-block'
                      type='button' 
                      disabled={product.countInStock === 0} 
                      onClick={addToCartHandler}
                    >
                      Hinzufügen
                    </Button>
                 
      </Card.Body>
    </Card>
  );
};

export default Product;

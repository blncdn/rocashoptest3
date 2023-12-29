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

  
  
  
      
    <Card style={{border:'none', borderRadius:'0'}} className='my-2'>
      <Link to={`/product/${product._id}`}>
        <Card.Img  alt='Card' className='imageSmall' src={product.image[0]} variant='top' />
      </Link>
      <Card.Body style={{padding:'0px 0px 0px 0px'}} >
        <Link style={{padding:'0px 0px 0px 0px'}} to={`/product/${product._id}`}>
          <Card.Title style={{padding:'0px 0px 0px 0px', marginBottom:'0'}} as='div' className='product-title'>
            <strong style={{padding:'0px 10px 0px 10px'}}>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text style={{padding:'0px 10px 0px 10px'}}  as='div'>
          <Rating
            style={{padding:'0px 10px 0px 10px'}}
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text style={{padding:'5px 10px 0px 10px'}}  as='h3'>€{product.price}</Card.Text>
       
          <Button   style={{width:'100%',borderRadius:'0',borderColor:'#3c3655',
                        backgroundColor:'#3c3655',}} hover={{backgroundColor: 'white'}}
                       
                      className='btn-block click'
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

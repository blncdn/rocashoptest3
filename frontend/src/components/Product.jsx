import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { addToCart } from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
   toast.success('Artikel wurde hinzugefügt');
};

  return (

  
  
  
      
    <Card style={{border:'none', borderRadius:'0'}} className='my-2 card'>
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

        <Card.Text style={{padding:'5px 10px 0px 10px'}}  as='h3'> {product.countInStock > 0 ?  ${product.price}  : '-'} </Card.Text>
       
          <Button   style={{width:'100%',borderRadius:'0'
                        }} hover={{backgroundColor: 'white'}}
                       
                      className='btn-block click'
                      type='button'  
                      disabled={product.countInStock === 0}             
                      onClick={addToCartHandler}
                    >
                      {product.countInStock > 0 ? 'Hinzufügen ' : 'Ausverkauft'}
                    </Button>
                 
      </Card.Body>
    </Card>

  
  );
};

export default Product;

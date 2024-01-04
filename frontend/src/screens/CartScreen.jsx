import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import {motion} from 'framer-motion'

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // NOTE: no need for an async function here as we are not awaiting the
  // resolution of a Promise
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1.4,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.06, 0.01, 0.99],
      },
    },
  };
  const products = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1.4,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.06, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={content}
      >
    <Row>
      <Col md={8}>
        <motion.h1 variants={title} style={{ marginBottom: '20px' }}>Warenkorb</motion.h1>
        {cartItems.length === 0 ? (
          <motion.div variants={title}>
          <Message>
            Ihr Warenkorb ist leer <Link to='/'>Zurück</Link>
          </Message>
          </motion.div>
        ) : (
        <motion.section variants={products}>  
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
               
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <br></br>
  
                  <Col md={2}>${item.price}</Col>
                  <br></br>
                  <br></br>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item._id)}
                      
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
           </motion.section>
        )}
      </Col>
      
      <Col md={4}>
        <motion.section variants={products}> 
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              €
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                 Zur Kasse 
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card></motion.section>
      </Col>
      
    </Row>
    </motion.div>
    </motion.section>
  );
};

export default CartScreen;

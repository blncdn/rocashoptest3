import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import SearchBox from '../components/SearchBox';
import { motion } from "framer-motion";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };
  const carousel = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
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
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.6, -0.08, 0.01, 0.99],
      },
    },
  };
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  return (
    <>
<motion.section exit={{ opacity: 0 }}>
<motion.div
        initial="initial"
        animate="animate"
        variants={content}
      >
      {!keyword ? (   
        <motion.section variants={carousel}>     
        <ProductCarousel /> 
        </motion.section>        
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Zurück
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <br></br>
          <br></br>
          <br></br>
            <div style={{display:'flex', justifyContent:'space-between', height:'38px'}}>
              <motion.h1 variants={title} style={{paddingLeft:'10px'}}>Produkte</motion.h1>
              <SearchBox/>
            </div>
            <br></br>
          <Container>
          <Row>   
            {data.products.map((product) => (
              <Col key={product._id} xs={6} sm={6} md={6} lg={3} xl={3}>
                <motion.section variants={products}>      
                  <Product product={product} />
                </motion.section>
              </Col>           
            ))}           
          </Row>
          </Container> 
          <br></br><br></br><br></br>
          <Paginate 
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          /><br></br><br></br><br></br>
        </>
      )}
      </motion.div>
    </motion.section>
    </>
  );
};
export default HomeScreen;

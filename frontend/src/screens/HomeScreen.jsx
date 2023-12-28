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
const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
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
              <h1 style={{paddingLeft:'10px'}}>Produkte</h1>
              <SearchBox/>
            </div>
            <br></br>
   
          <Container>
          <Row>
          
            {data.products.map((product) => (
              <Col key={product._id} xs={6} sm={6} md={4} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row></Container>
          <br></br><br></br><br></br>
          <Paginate 
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          /><br></br><br></br><br></br>
        </>
      )}
    </>
  );
};

export default HomeScreen;

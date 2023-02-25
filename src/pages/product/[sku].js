import axios from 'axios';
import { useRouter } from 'next/router';
const apiUrl = process.env.API_PRODUCT_URL;
import { Row, Col, Image, Button } from 'antd';
import styled from 'styled-components';

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const ImageThumbnail = styled.img`
  height: 80px;
  width: 20%;
  margin: 5px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '2px solid #1890ff' : 'none')};
  border-radius: 5px;
`;

function ProductDetails({ product }) {
  const router = useRouter();

  return (
    <ProductDetailContainer>
      <ImageContainer>
        <Image
          src={product.image?.url}
          alt={product?.name}
          width={350}
          preview={false}
        />

        <Row justify='center'>
          {/* {product?.image.map((img, index) => (
            <ImageThumbnail
              key={index}
              src={img.url}
              alt={img.url}
              isActive={isActive(index)}
              onClick={() => setTab(index)}
            />
          ))} */}
        </Row>
      </ImageContainer>

      <Col md={12} xs={24}>
        <h2>{product.brand?.name}</h2>
        <h4>${product?.name}</h4>

        <Row
          justify='space-between'
          align='middle'
          style={{ marginBottom: 10 }}
        >
          <Col>
            <span style={{ color: 'red' }}>
              ฿{product.price_range.minimum_price.final_price?.value}
            </span>
          </Col>

          <Col>
            <span style={{ color: 'red' }}>
              {' '}
              ฿{product.price_range.minimum_price.regular_price?.value}
            </span>
          </Col>
        </Row>

        <div style={{ marginBottom: 10 }}>
          SAVE ฿{product.price_range.minimum_price.discount?.amount_off}
        </div>

        <Button
          type='primary'
          size='large'
          style={{ width: '100%' }}
          onClick={() => {}}
        >
          ADD TO BAG
        </Button>
      </Col>
    </ProductDetailContainer>
  );
}

export async function getServerSideProps(context) {
  const { sku } = context.query;
  const res = await axios.get(`${apiUrl}/?sku=${sku}`);
  const product = res.data;
  console.log('TEST_______', product);

  return {
    props: { product },
  };
}

export default ProductDetails;

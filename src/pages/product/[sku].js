import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
const apiUrl = process.env.API_PRODUCT_URL;
import { Row, Col, Image, Button, Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  width: 25%;
  margin: 5px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '1px solid #808B96' : 'none')};
  border-radius: 5px;
`;

const SpecialText = styled(Text)`
  color: #ff0000;
  font-weight: bold;
`;

const FullPriceText = styled(Text)`
  color: #a1a1a1;
  text-decoration: line-through;
  margin-left: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 2em;
  margin-right: 2em;
  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-right: 0em;
  }
`;

function ProductDetails({ product }) {
  const router = useRouter();
  const [tab, setTab] = useState(0);

  const images = [
    { url: product.image.url },
    { url: product.small_image.url },
    { url: product.second_image.url },
  ];
  console.log(images);

  const isActive = (index) => {
    if (tab === index) {
      return 'active';
    }
  };

  return (
    <ProductDetailContainer>
      <ImageContainer>
        <Image
          src={images[tab].url}
          alt={images[tab].url}
          width={350}
          preview={false}
        />

        <Row justify='center'>
          {images
            .filter((x) => x.url != '')
            .map((img, index) => (
              <ImageThumbnail
                key={index}
                src={img.url}
                alt={img.url}
                isActive={isActive(index)}
                onClick={() => setTab(index)}
              />
            ))}
        </Row>
      </ImageContainer>

      <Col md={12} xs={24} style={{ padding: '1.5rem' }}>
        <h1>{product.brand?.name}</h1>
        <h4>{product?.name}</h4>

        <Row
          justify='space-between'
          align='middle'
          style={{ marginBottom: 10 }}
        >
          <Col>
            <SpecialText style={{ fontSize: '22px' }}>
              ฿{product.price_range.minimum_price.final_price?.value}
            </SpecialText>
            <FullPriceText style={{ fontSize: '16px' }}>
              ฿{product.price_range.minimum_price.regular_price?.value}
            </FullPriceText>
          </Col>
        </Row>
        <Row>
          <SpecialText style={{ fontSize: '16px' }}>
            SAVE ฿{product.price_range.minimum_price.discount?.amount_off}
          </SpecialText>
        </Row>
        <ButtonContainer>
          <Button
            size='large'
            style={{
              width: '90%',
              backgroundColor: '#000',
              color: '#FFF',
            }}
            onClick={() => {}}
          >
            ADD TO BAG
          </Button>
        </ButtonContainer>
      </Col>
    </ProductDetailContainer>
  );
}

export async function getServerSideProps(context) {
  const { sku } = context.query;
  const res = await axios.get(`${apiUrl}/?sku=${sku}`);
  const product = res.data;

  return {
    props: { product },
  };
}

export default ProductDetails;

import axios from 'axios';
import { useState } from 'react';
import { Row, Col, Image, Button, Typography } from 'antd';
import { NavBar, SaleBadge } from '@/components';
import styled from 'styled-components';

const apiUrl = process.env.API_PRODUCT_URL;
const { Text } = Typography;

function ProductDetails({ product }) {
  const [tab, setTab] = useState(0);

  const images = [
    { url: product.image.url },
    { url: product.small_image.url },
    { url: product.second_image.url },
  ];

  const isActive = (index) => {
    if (tab === index) {
      return 'active';
    }
  };

  return (
    <>
      <NavBar />
      <ProductDetailContainer>
        <ImageContainer>
          <MainImage>
            <Image
              src={images[tab].url}
              alt={images[tab].url}
              width={350}
              preview={true}
            />
            <SaleBadge
              discount={product.price_range.minimum_price.discount?.percent_off}
            />
          </MainImage>

          <Row justify='center'>
            {images
              .filter((img) => img.url != '')
              .map((img, index) => (
                <SubImage key={index}>
                  <ImageThumbnail
                    key={index}
                    src={img.url}
                    alt={img.url}
                    isActive={isActive(index)}
                    onClick={() => setTab(index)}
                  />
                </SubImage>
              ))}
          </Row>
        </ImageContainer>

        <Col md={12} xs={24} style={{ padding: '1.5rem' }}>
          <h1>{product.brand?.name}</h1>
          <h4>{product?.name}</h4>
          {product.price_range.minimum_price.discount?.amount_off === 0 ? (
            <ContentRow>
              <Col>
                <RegularText style={{ fontSize: '22px' }}>
                  ฿{product.price_range.minimum_price.final_price?.value}
                </RegularText>
              </Col>
            </ContentRow>
          ) : (
            <>
              <ContentRow>
                <Col>
                  <SpecialText style={{ fontSize: '22px' }}>
                    ฿{product.price_range.minimum_price.final_price?.value}
                  </SpecialText>
                  <FullPriceText style={{ fontSize: '16px' }}>
                    ฿{product.price_range.minimum_price.regular_price?.value}
                  </FullPriceText>
                </Col>
              </ContentRow>
              <Row>
                <SpecialText style={{ fontSize: '16px' }}>
                  SAVE ฿{product.price_range.minimum_price.discount?.amount_off}
                </SpecialText>
              </Row>
            </>
          )}

          <ButtonContainer>
            <Button size='large' style={CartButton} onClick={() => {}}>
              ADD TO CART
            </Button>
          </ButtonContainer>
        </Col>
      </ProductDetailContainer>
    </>
  );
}

export default ProductDetails;

export async function getServerSideProps(context) {
  const { sku } = context.query;
  const res = await axios.get(`${apiUrl}/?sku=${sku}`);
  const product = res.data;

  return {
    props: { product },
  };
}

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  min-height: 500px;

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
  width: 100%;
  margin: 5px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '1px solid #808B96' : 'none')};
  border-radius: 5px;
  object-fit: contain;
`;

const RegularText = styled(Text)`
  color: #000;
  font-weight: bold;
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

const MainImage = styled.div`
  height: auto;
  min-height: 150px;
  position: relative;
`;

const SubImage = styled.div`
  width: auto;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartButton = {
  width: '90%',
  backgroundColor: '#000',
  color: '#FFF',
  '@media screen and (max-width: 767px)': {
    width: '100%',
  },
};

const ContentRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

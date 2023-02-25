import React from 'react';
import Link from 'next/link';
import { Card, Image, Typography, Row } from 'antd';
import { SaleBadge } from '@/components';
import styled from 'styled-components';

const { Text } = Typography;

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product?.sku}`}>
      <ProductDetailCard hoverable>
        <ImageContainer>
          <ProductImage
            alt={product?.name}
            src={product.image?.url}
            preview={false}
          />
        </ImageContainer>
        <Row>
          <h3>{product.brand?.name}</h3>
        </Row>
        <Row>
          <Text>{product?.name}</Text>
        </Row>
        {product.price_range.minimum_price.discount?.amount_off === 0 ? (
          <Row>
            <RegularText style={{ fontSize: '16px' }}>
              ฿{product.price_range.minimum_price.final_price?.value}
            </RegularText>
          </Row>
        ) : (
          <>
            <Row>
              <SpecialText style={{ fontSize: '16px' }}>
                ฿{product.price_range.minimum_price.final_price?.value}
              </SpecialText>
              <FullPriceText style={{ fontSize: '14px' }}>
                ฿{product.price_range.minimum_price.regular_price?.value}
              </FullPriceText>
            </Row>
            <Row>
              <SpecialText style={{ fontSize: '14px' }}>
                SAVE ฿{product.price_range.minimum_price.discount?.amount_off}
              </SpecialText>
            </Row>
          </>
        )}
        <SaleBadge
          discount={product.price_range.minimum_price.discount?.percent_off}
        />
      </ProductDetailCard>
    </Link>
  );
};

export default ProductCard;

const ProductDetailCard = styled(Card)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled(Image)`
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  height: 250px;
  width: auto;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-weight: bold;
  margin-top: 2px;
`;

import React from 'react';
import Link from 'next/link';
import { Card, Image, Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;

const StyledCard = styled(Card)`
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
  height: auto;
  max-height: 250px;
  height: 250px;
  width: auto;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecialText = styled(Text)`
  color: #ff0000;
  font-weight: bold;
`;

const FullPriceText = styled(Text)`
  color: #a1a1a1;
  text-decoration: line-through;
`;

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.sku}`}>
      <StyledCard hoverable>
        <ImageContainer>
          <ProductImage
            alt={product?.name}
            src={product.image?.url}
            preview={false}
          />
        </ImageContainer>
        <h3>{product.brand?.name}</h3>
        <Text>{product?.name}</Text>
        <SpecialText style={{ fontSize: '16px' }}>
          ฿{product.price_range.minimum_price.final_price?.value}
        </SpecialText>
        <FullPriceText>
          ฿{product.price_range.minimum_price.regular_price?.value}
        </FullPriceText>
        <SpecialText style={{ fontSize: '14px' }}>
          SAVE ฿{product.price_range.minimum_price.discount?.amount_off}
        </SpecialText>
      </StyledCard>
    </Link>
  );
};

export default ProductCard;

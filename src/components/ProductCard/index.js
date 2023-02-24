import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Card, Image } from 'antd';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  .ant-card-cover {
    position: relative;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    background-color: #f0f0f0;
    padding-bottom: 75%;

    .ant-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.7s ease-in-out;

      &.is-loading {
        transform: scale(1.1);
        filter: blur(2px);
        filter: grayscale(100%);
      }
    }

    &:hover .ant-image {
      opacity: 0.75;
    }
  }

  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;

    h3 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0;
    }

    .ant-typography {
      font-size: 14px;
      font-style: italic;
      color: #9e9e9e;
      margin-top: 8px;
      margin-bottom: 0;
    }
  }
`;


const ProductCard = ({ product }) => {
  return (
    // <StyledLink to={`/products/${product.id}`} >
    <Card
      cover={
   
          <Image
            alt=''
            src={product.image.url}
            placeholder={
              <Image
                preview={false}
                src={product.small_image.url}
                width='100%'
                height='100%'
              />
            }
          />
   
      }
    >
      <div>
        <h3>{product.brand?.name}</h3>
        <h4>{product?.name}</h4>
        <h3>฿{product.price_range.minimum_price.final_price?.value}</h3>
        <p>฿{product.price_range.minimum_price.regular_price?.value}</p>
        <h4>฿{product.price_range.minimum_price.discount?.amount_off}</h4>
      </div>
      <p>{product?.name} calories</p>
    </Card>
    // </StyledLink>
  );
};

export default ProductCard;

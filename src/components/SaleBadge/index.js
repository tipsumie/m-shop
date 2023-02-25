import React from 'react';
import { Card, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const SaleBadge = ({ discount }) => {
  return (
    discount > 0 && (
      <DiscountBadge size='small'>
        <DiscountText>{`Saved ${discount}%`}</DiscountText>
      </DiscountBadge>
    )
  );
};

export default SaleBadge;

const DiscountBadge = styled(Card)`
  background-color: #ff0000;
  position: absolute;
  top: 0px;
  right: 0;
  border-bottom-left-radius: 50px;
`;

const DiscountText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;

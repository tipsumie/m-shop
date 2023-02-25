import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';

const CustomPagination = ({ current, total, onChange }) => {
  return (
    <PaginationContainer>
      <Pagination current={current} total={total} onChange={onChange} />
    </PaginationContainer>
  );
};

export default CustomPagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

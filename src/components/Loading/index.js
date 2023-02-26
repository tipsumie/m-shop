import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingOutlined
        style={{ fontSize: 70, fontWeight: 'bold', marginTop: '90px' }}
      />
      <h3>Loading.....</h3>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

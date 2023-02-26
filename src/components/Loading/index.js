import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Row, Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

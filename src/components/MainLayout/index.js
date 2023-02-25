import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {children}
      </Content>
      <FooterLayout>
        <p> M Shop ©2023 Created by MM</p>
        <span>|</span>
        <a href='https://github.com/tipsumie/m-shop'>Source code</a>
      </FooterLayout>
    </div>
  );
};

export default MainLayout;

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e8ef;
  padding: 1rem;
  font-size: 0.75rem;
  margin-top: 10px;

  & > p {
    margin-right: 0.5rem;
  }

  & > a {
    font-weight: 500;
    color: #f97316;
    margin-left: 5px;
  }
`;

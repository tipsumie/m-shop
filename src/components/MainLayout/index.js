import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

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

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        M Shop ©2023 Created by MM
      </Footer>
    </div>
  );
};

export default MainLayout;

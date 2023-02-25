import { Header, ProductCard, Pagination } from '@/components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin: -12px;

  .ant-col {
    padding: 12px;
  }
`;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  const fetchData = (page) => {
    axios.get(`api/getProducts/${page}`, {}).then((res) => {
      setProducts(res.data);
    });
  };

  const handlePaginationChange = (page) => {
    fetchData(page);
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div>
        <h2>Product List</h2>

        <StyledRow gutter={[12, 10]}>
          {products.map((product) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={product.id}>
              <ProductCard product={product} key={product.id} />
            </Col>
          ))}
        </StyledRow>

        <Pagination
          current={currentPage}
          total={50}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
}

import { Header, ProductCard } from '@/components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { Row, Col, Pagination } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin: -12px;

  .ant-col {
    padding: 12px;
  }
`;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(8);
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
        <Head>
          <title>Product List</title>
        </Head>
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
          total={totalPages * 10}
          pageSize={20}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
}

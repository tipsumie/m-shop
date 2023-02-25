import { Header, ProductCard, Pagination } from '@/components';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import styled from 'styled-components';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let productRef = useRef();

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  const scrollHandler = () => {
    productRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const fetchData = (page) => {
    axios.get(`api/getProducts/${page}`, {}).then((res) => {
      setProducts(res.data);
    });
  };

  const handlePaginationChange = (page) => {
    fetchData(page);
    setCurrentPage(page);
    scrollHandler();
  };

  return (
    <>
      <Header />
      <div>
        <h2 ref={(element) => (productRef = element)}>On Sale Products</h2>

        <ProductsRow gutter={[12, 10]}>
          {products.length === 0 ? (
            <h2>No Products</h2>
          ) : (
            products.map((product) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={product?.id}>
                <ProductCard product={product} key={product?.id} />
              </Col>
            ))
          )}
        </ProductsRow>

        <Pagination
          current={currentPage}
          total={50}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
}

const ProductsRow = styled(Row)`
  margin: -12px;

  .ant-col {
    padding: 12px;
  }
`;

import { Header } from '@/components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { List, Pagination } from 'antd';

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

        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
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

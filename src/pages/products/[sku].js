import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function ProductDetail() {
  const router = useRouter();
  const { sku } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://mbgcbs5lbzuslneom7djs4gnse0xxffw.lambda-url.ap-southeast-1.on.aws/?sku=${sku}`
      );
      setProduct(response.data);
    };

    if (sku) {
      fetchData();
    }
  }, [sku]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;

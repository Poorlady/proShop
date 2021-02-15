import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Banner,
  ProductOption,
  Review,
} from "../components/index";
import { Link } from "react-router-dom";

import axios from "axios";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${match.params.id}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <div className="container detail">
        <Link to="/" className="button">
          Go back
        </Link>
        <Banner product={product} />
        <ProductOption stock={product.countInStock} />
        <Review />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

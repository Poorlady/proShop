import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Banner,
  ProductOption,
  Review,
  Loader,
  Message,
} from "../components/index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { productDetailAction } from "../redux/action/productListActions";

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );
  const dispatch = useDispatch();
  console.log(qty);
  useEffect(() => {
    dispatch(productDetailAction(match.params.id));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setQty(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Header />
      <div className="container detail">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message />
        ) : (
          <>
            <Link to="/" className="button">
              Go back
            </Link>
            <Banner product={product} />
            <ProductOption
              qty={qty}
              handleChange={handleChange}
              stock={product.countInStock}
              handleSubmit={handleSubmit}
            />
            <Review />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

import React, { useEffect, useState } from "react";
import { Header, Slider, ProductCard, Footer } from "../components";
import { productListAction } from "../redux/action/productListActions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      {/* <Slider products={products} /> */}
      <div className="products">
        <div className="container">
          <h2 className="products__title">Latest Products</h2>
          {loading ? (
            <h2>Loading ...</h2>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <div className="products__grid">
              {products.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

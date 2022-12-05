import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector(state => state.itemsData.items)
  const productsForCategory = useMemo(() => products.filter(p => p.categories.includes(cat.title)))
  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       products.filter((item) =>
  //         Object.entries(filters).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       )
  //     );
  // }, [products, cat, filters]);

  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);

  return (
    <Container>
      {cat && React.Children.toArray(productsForCategory.map(product => <Product item={product} />))}
    </Container>
  );
};
export default Products;

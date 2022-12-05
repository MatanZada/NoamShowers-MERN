import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import React from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #eeeeee;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  const categories = useSelector(state => state.itemsData.categories)
  return (
    <Container>
      {React.Children.toArray(categories.map(category => <CategoryItem item={category} />))}
    </Container>
  );
};

export default Categories;

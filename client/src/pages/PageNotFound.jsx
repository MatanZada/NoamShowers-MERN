import imagePage from "../../src/images/giphy.gif";
import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const Image = styled.img`
  width: 70%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const PageNotFound = () => {
  return (
    <>
      <Container>
        <h1>Error 404 - Page Not Found</h1>
        <Image src={imagePage} alt="Error 404" />
      </Container>
    </>
  );
};
export default PageNotFound;

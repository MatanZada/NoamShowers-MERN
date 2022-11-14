import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
    @media only screen and (max-width: 480px) {
      ${props}
    }
    @media only screen and (max-width: 600px) {
      ${props}
    }
    @media only screen and (max-width: 992px) {
      ${props}
    }
    @media only screen and (max-width: 1000px) {
      ${props}
    }
    @media only screen and (max-width: 1250px,max-height: 1200px) {
      ${props}
    }
  `;
};

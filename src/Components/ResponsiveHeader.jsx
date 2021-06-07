import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledHeader = styled.div`
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      color: var(--sky-blue);
      line-height: 35px;
      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: Futura;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function ResponsiveHeader(props) {
  return (
    <StyledHeader>
      <Container>{props.children}</Container>
    </StyledHeader>
  );
}
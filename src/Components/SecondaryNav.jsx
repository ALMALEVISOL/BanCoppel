import React, { Component } from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background: var(--white);
  padding: 13px 0;
  display: none;
  .secondaryNav {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    h4 {
      color: var(--gray);
      cursor: pointer;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    display: flex;
  }
`;

export default class SecondaryNav extends Component {
  render() {
    return (
      <StyledNav>
        <div className="secondaryNav">
          <h4>Soluciones</h4>
          <h4>PyMES</h4>
          <h4>Contáctanos</h4>
        </div>
      </StyledNav>
    );
  }
}
import React, { Component } from "react";
import styled from "styled-components";
import Container from "./Container";

import PymesMobile from "../Assets/pymes_last_mobile.png";
import Pymes from "../Assets/pymes.png";
import BancoppelBtn from "./BancoppelBtn";

const StyledBanner = styled.section`
  .container {
    padding-top: 25px;
    padding-bottom: 25px;
    position: relative;
  }
  .imgNormal {
    display: none;
  }

  .img-holder {
    img {
      max-width: 100%;
    }
  }

  .contenido_sobrepuesto {
    position: absolute;
    width: calc(100% - 30px);
    height: calc(100% - 50px);
    top: 25px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    a {
      margin-bottom: 27px;
      button {
        width: 180px;
        height: 60px;
      }
    }
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .imgNormal {
      display: block;
    }

    .imgResponsivo {
      display: none;
    }

    .contenido_sobrepuesto {
      width: calc(100% - 30px);
      height: calc(100% - 100px);
      top: 50px;
      justify-content: flex-start;
      a {
        margin-bottom: 10px;
        margin-left: 41px;
      }
    }
  }

  @media (min-width: 992px) {
    .contenido_sobrepuesto {
      a {
        margin-bottom: 27px;
        margin-left: 57px;
      }
    }
  }

  @media (min-width: 1200px) {
  }
`;

export default class ConoceCredito extends Component {
  render() {
    return (
      <StyledBanner>
        <Container>
          <div className="img-holder">
            <img
              className="imgNormal"
              src={Pymes}
              alt=""
              draggable="false"
            ></img>

            <img
              className="imgResponsivo"
              src={PymesMobile}
              alt=""
              draggable="false"
            ></img>
          </div>

          <div className="contenido_sobrepuesto">
            <a href="/contacto">
              <BancoppelBtn amarillo>Solicita tu crédito</BancoppelBtn>
            </a>
          </div>
        </Container>
      </StyledBanner>
    );
  }
}

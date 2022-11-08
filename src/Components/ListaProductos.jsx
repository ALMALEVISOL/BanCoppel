import React, { Component } from "react";
import styled from "styled-components";
import CardBlue from "./CardBlue";
import Container from "./Container";
import Slider from "./Slider";
import Catalogo from "../Catalogo_Productos";
import { withRouter } from "react-router-dom";

const StyledPructs = styled.div`
  background: var(--white) !important;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 0;
  }
  .bancoppel_slider,
  .bancoppel__slider {
    background: var(--white) !important;
  }
  .container {
    width: 100%;
    max-width: 1030px !important;
    .rec {
      text-align: center;
      color: var(--storm-blue);
      font-family: futura_normal;
      font-weight: bold;
      font-size: 24px;
      @media (min-width: 992px) {
        display: none;
      }
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  justify-content: ${({ len }) => (len < 3 ? "flex-start" : "center")};

  .CardBlue {
    margin-right: 26px;
    &:last-child {
      margin-right: 0px;
    }
  }
  @media (min-width: 992px) {
    ::-webkit-scrollbar {
      display: none;
    }
    .CardBlue {
      height: 362px;
      img {
        border-radius: 10px;
      }
      .copy {
        padding: 0px;
        h2 {
          margin-top: 14px;
        }
        p {
          margin-top: 9px;
        }
      }
      .card_body {
        button {
          margin: 0;
          margin-bottom: 40px !important;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .CardBlue {
      .card_body {
        button {
          margin-bottom: 40px !important;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .CardBlue {
      max-height: 522px;
      height: 522px;
      max-width: 306px;
      width: 306px;
      img {
        height: 306px;
      }
      .copy {
        padding: 0px;
        h2 {
          margin-top: 24px;
        }
      }
      .card_body {
        button {
          margin-bottom: 191px !important;
          margin-left: 46px !important;
        }
      }
    }
  }
`;

const StyledCardsResponsive = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  margin-top: 25px;
  background: var(--white) !important;
  .CardBlue {
    margin-right: 26px;
    &:last-child {
      margin-right: 0px;
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

class ListaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Productos: false,
    };
  }

  async componentDidMount() {
    const location = this.props.location.pathname;

    function arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele.path !== value;
      });
    }

    // result = [1, 2, 3, 4, 5, 7, 8, 9, 0]

    var splitArray = function (arr, size) {
      var arr2 = arr.slice(0),
        arrays = [];

      while (arr2.length > 0) {
        arrays.push(arr2.splice(0, size));
      }

      return arrays;
    };

    this.setState({
      Productos: await splitArray(arrayRemove(Catalogo, location), 3),
    });
  }

  bodySlider(data) {
    return (
      <StyledCards len={data.length}>
        {data ? (
          data.map((card, idx) => {
            return <CardBlue card={card} key={idx} />;
          })
        ) : (
          <p>no hay "cards" para mostrar</p>
        )}
      </StyledCards>
    );
  }

  render() {
    return this.state.Productos ? (
      <StyledPructs>
        <Container>
          <h2 className="rec">Recomendaciones</h2>
          <StyledCardsResponsive>
            {this.state.Productos.map((bloque, idx) => {
              return bloque.map((item, indx) => {
                return <CardBlue card={item} key={indx} />;
              });
            })}
          </StyledCardsResponsive>
        </Container>

        <Slider
          items={this.state.Productos}
          body={this.bodySlider}
          showHeader={false}
          renderVerticalCard
        />
      </StyledPructs>
    ) : null;
  }
}
export default withRouter(ListaProductos);

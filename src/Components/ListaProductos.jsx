import React, { Component } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import CardBlue from "./CardBlue";
import Slider from "./Slider";






const StyledCards = styled.div`
  padding: 10px 0;
  display: flex;
  overflow-x: scroll;
  width: 100%;
  justify-content: center;

 

  .CardBlue {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }

`;







const HomeSections = [
    {
      section: "Cuenta Eje",
      cards: [
        {
          titleWhite: "Crédito Cuenta",
          titleBlue: "Corriente CRAV",
          copy: "Un crédito diseñado de acuerdo a tus necesidades.",
          path: "/",
          image: require("../Assets/Persons2.png").default,
          button: "Ver más",
        },
        {
          titleWhite: "Crédito Cuenta",
          titleBlue: "Corriente Amortizable",
          copy: "El respaldo que le hacía falta a tu negocio.",
          path: "/",
          image: require("../Assets/Persons1.png").default,
          button: "Ver más",
        },
        {
          titleWhite: "Arrendamiento",
          titleBlue: "Financiero",
          copy: "Financiamiento de Activos fijos pensados para tu empresa.",
          path: "/",
          image: require("../Assets/IpadHands.png").default,
          button: "Ver más",
        },
        
      ],
    },
    {
      section: "Prueba",
      cards: [
        {
          titleWhite: "Crédito Cuenta",
          titleBlue: "Corriente CRAV",
          copy: "Un crédito diseñado de acuerdo a tus necesidades.",
          path: "/",
          image: require("../Assets/Persons2.png").default,
          button: "Ver más",
        },
        {
          titleWhite: "Crédito Cuenta",
          titleBlue: "Corriente Amortizable",
          copy: "El respaldo que le hacía falta a tu negocio.",
          path: "/",
          image: require("../Assets/Persons1.png").default,
          button: "Ver más",
        },
        {
          titleWhite: "Arrendamiento",
          titleBlue: "Financiero",
          copy: "Financiamiento de Activos fijos pensados para tu empresa.",
          path: "/",
          image: require("../Assets/IpadHands.png").default,
          button: "Ver más",
        },
        
      ],
    }
  ];

class ListaProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    body(data) {
        return (
        <StyledCards>
            {data.cards ? (
            data.cards.map((card, idx) => {
                return <CardBlue card={card} key={idx} />;
            })
            ) : (
            <p>no hay "cards" para mostrar</p>
            )}
        </StyledCards>
        );
    }
    
    bodySlider(data) {
        return (
        <StyledCards>
            {data.cards ? (
            data.cards.map((card, idx) => {
                return <CardBlue card={card} key={idx}/>;
            })
            ) : (
            <p>no hay "cards" para mostrar</p>
            )}
        </StyledCards>
        );
    }

  render() {
    return (
      <>
        {/* {this.bodySlider(this.props.items)} */}
        <Slider items={this.props.items} body={this.bodySlider} showHeader={false}/>
      </>
    );
  }
}
export default ListaProductos;

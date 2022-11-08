import React from "react";
import styled from "styled-components";
import Card from "./SecondaryCardBlue";

const StyledSencdaryCards = styled.div`
  .item {
    margin: 10px auto; //FALTA
  }

  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; //no
    .item {
      max-width: 50%;
      margin: 0;
      padding: 10px;
      flex: 1;
      display: flex;
      justify-content: center; //no
    }
  }

  @media (min-width: 992px) {
    width: ${({ wid }) => wid}px;
    max-width: 100%;
    margin: auto;
    .item {
      padding: 10px;
      max-width: ${({ len }) => 100 / len}%;
      flex: 0;
    }
  }
`;

export default function ListCardsSecondary(props) {
  function getWidth(number) {
    return Math.ceil(number / 2);
  }
  function getWidthCont(number) {
    if (number >= 4) {
      return getWidth(number) * 256;
    }
  }

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
    //  justifyContent: "center"
    marginLeft: "12.5%"
      //Falta el nombre de la class
    }}
      len={getWidth(props.cards.length)}
      wid={getWidthCont(props.cards.length)}
    >
      {props.cards.map((card, idx) => (
        <div className="" item={idx} key={idx} style={{ //Falta el nombre de la class
          padding: "10px",
          flex: "0",
          maxWidth: "100%"

        }}>
          <Card key={idx} card={card} />
        </div>
      ))}
    </div>
  );
}

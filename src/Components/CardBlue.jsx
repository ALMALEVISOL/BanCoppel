import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  background: #002a61;
  min-width: 262px;
  max-width: 262px;
  height: 500px;
  border-radius: 20px;
  position: relative;
  img {
    border-radius: 22px;
    width: 100%;
    height: 255px;
    object-fit: cover;
  }

  .card_body {
    display: flex;
    flex-direction: column;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 262px);

    .copy {
      display: flex;
      align-items: left;
      flex-direction: column;
      h2 {
        font-family: futura_heavy;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        span {
          color: #81c1ea;
        }
      }
      p {
        margin: 0;
        margin-top: 7px;
        font-family: futura_book;
        font-size: 16px;
        line-height: 115%;
        text-align: center;
        color: #ffffff;
      }
    }
    a {
      padding: 0;
      button {
        border: 0;
        width: 150px;
        height: 40px;
        margin: 0;
        margin-bottom: 20px;
        margin-left: 10px;
      }
      button:hover {
        background-color: #ffbe12;
        color: #002a61;
      }
    }
  }

  @media (min-width: 992px) {
    min-width: 230px;
    max-width: 230px;
    width: 100%;
    height: 360px; //MISMO PROBLEMA QUE CARD FINANCIAMIENTO ORDENES DE COMPRA
    img {
      height: 140px;
    }

    .card_body {
      padding: 10px;
      height: calc(100% - 140px);
      align-items: flex-start;

      .copy {
        h2 {
          font-size: 18px;
          text-align: left;
        }
        p {
          font-size: 14px;
          margin-top: 15px;
          text-align: left;
        }
      }
      a {
        margin-top: 15px;
      }
      button {
        margin-bottom: 00px !important;
      }
    }
  }

  /* SECONDARY */
  width: ${({ secondary }) => (secondary ? "449px" : null)} !important;
  max-width: ${({ secondary }) => (secondary ? "449px" : null)} !important;
  height: ${({ secondary }) => (secondary ? "auto" : null)} !important;
  min-height: ${({ secondary }) => (secondary ? "330px" : null)} !important ;
  img {
    height: ${({ secondary }) => (secondary ? "330px" : null)} !important;
  }
  .card_body {
    padding: ${({ secondary }) => (secondary ? "20px" : null)};
    height: ${({ secondary }) => (secondary ? "auto" : null)} !important;

    .copy {
      padding: ${({ secondary }) => (secondary ? "10px" : null)};
      h2 {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      p {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      h3 {
        font-family: futura_heavy;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
      }
    }
  }

  /* ROW */
  .card_body {
    padding: ${({ row }) => (row ? "10px" : null)};
    width: ${({ row }) => (row ? "472px" : null)};
    height: ${({ row }) => (row ? "224px" : null)};
    align-items: ${({ row }) => (row ? "flex-start" : null)};

    .copy {
      h2 {
        font-size: ${({ row }) => (row ? "18px" : null)};
        text-align: left;
      }
      p {
        font-size: ${({ row }) => (row ? "14px" : null)};
        text-align: left;
      }
    }
  }

  @media (min-width: 992px) {
    display: ${({ row }) => (row ? "flex" : null)};

    max-width: ${({ row }) => (row ? "423px" : null)};
    height: ${({ row }) => (row ? "224px" : null)};

    img {
      height: ${({ row }) => (row ? "224px" : null)};
      max-width: ${({ row }) => (row ? "200px" : null)};
    }

    a {
      margin-bottom: ${({ row }) => (row ? "10px" : null)};
    }
  }

  @media (min-width: 1200px) {
    min-width: 306px;
    width: 306px;
    margin: 0 auto;
    .card_body {
      .copy {
        width: 130%;
        padding: 0px 25px 0px 10px;
        h2 {
          font-size: 20px; //DEBE SER 24 PERO SE SALE
          line-height: 100%;
          max-width: 211px; //TEXTO FINANCIAMIENTO ORDENES COMPRA MÁS PEQUEÑO
        }
        p {
          padding: 0 6px 0;
          margin-right: 50px;
          font-size: 16px;
          line-height: 16px;
        }
      }
      button{
        margin-left: 90px;
      }
    }
  }

  /* 
  @media (min-width: 1400px) {
    min-width: 315px;
    height: 555px;
    img {
      height: 310px;
    }

    .card_body {
      padding: 20px;
      height: calc(100% - 310px);
      align-items: flex-start;

      .copy {
        h2 {
          font-size: 22px;
        }
        p {
          font-size: 16px;
          margin-top: 15px;
        }
      }
      a {
        margin-top: 15px;
      }
      button {
        margin-bottom: 10px !important;
      }
    }
  } */
`;

class CardBlue extends Component {
  render() {
    const { card, ...rest } = this.props;

    return (
      <Card className="CardBlue" {...rest}>
        {card.image ? <img src={card.image} alt="img" /> : null}
        <div className="card_body">
          <div className="copy">
            <h2>{card.title_custom}</h2>
            {card.homeCopy ? <p>{card.homeCopy}</p> : null}
            {card.copy2 ? <h3>{card.copy2}</h3> : null}
          </div>

          {card.path ? (
            <a href={card.path}>
              <BancoppelBtn>
                {rest.row ? "Me interesa" : "Ver más"}
              </BancoppelBtn>
            </a>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default CardBlue;

import React, { Component } from "react";
import BancoppelBtn from "./BancoppelBtn";
import styled from "styled-components";

const Card = styled.div`
  background: #002a61;
  min-width: 252px;
  max-width: 252px;
  height: 351px;
  border-radius: 20px;
  position: relative;
  img {
    border-radius: 20px;
    width: 100%;
    height: 139px;
    object-fit: cover;
  }

  .card_body {
    display: flex;
    flex-direction: column;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 145px);

    .copy {
      h1 {
        font-family: Futura;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        color: #ffffff;
        span {
          color: #81c1ea;
        }
      }
      p {
        margin: 0;
        margin-top: 7px;
        font-family: futura_light;
        font-size: 14px;
        line-height: 115%;
        text-align: center;
        color: #ffffff;
      }
      h2 {
      }
    }
    a {
      padding: 0;
      button {
        border: 0;
        width: 157px;
        height: 50px;
        margin: 0;
      }
    }
  }

  @media (min-width: 992px) {
    min-width: 306px;
    height: 532px;
    img {
      height: 306px;
    }

    .card_body {
      padding: 15px;
      height: calc(100% - 306px);

      .copy {
        h1 {
          font-size: 22px;
          text-align: left;
        }
        p {
          font-size: 16px;
          margin-top: 15px;
          text-align: left;
        }
      }
      a {
        margin-top: 15px;
      }
    }
  }

  /* SECONDARY */
  width: ${({ secondary }) => (secondary ? "449px" : null)} !important;
  max-width: ${({ secondary }) => (secondary ? "449px" : null)} !important;
  height: ${({ secondary }) => (secondary ? "auto" : null)} !important;
  img {
    height: ${({ secondary }) => (secondary ? "330px" : null)} !important;
  }
  .card_body {
    padding: ${({ secondary }) => (secondary ? "20px" : null)};
    height: ${({ secondary }) => (secondary ? "auto" : null)} !important;

    .copy {
      h1 {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      p {
        display: ${({ secondary }) => (secondary ? "none" : null)};
      }
      h2 {
        font-family: futura_normal;
        font-size: 21px;
        line-height: 125%;
        color: #ffffff;
      }
    }
  }

  /* ROW */
  @media (min-width: 992px) {
    display: ${({ row }) => (row ? "flex" : null)};
    min-width: ${({ row }) => (row ? "472px" : null)};
    max-width: ${({ row }) => (row ? "472px" : null)};
    height: ${({ row }) => (row ? "224px" : null)};

    img {
      height: ${({ row }) => (row ? "224px" : null)};
      max-width: ${({ row }) => (row ? "200px" : null)};
    }
  }

  .card_body {
    padding: ${({ row }) => (row ? "20px" : null)};
    width: ${({ row }) => (row ? "calc(100% - 200px)" : null)};
    height: ${({ row }) => (row ? "100%" : null)};
    align-items: ${({ row }) => (row ? "flex-start" : null)};

    .copy {
      h1 {
        font-size: ${({ row }) => (row ? "19px" : null)};
        br {
          display: ${({ row }) => (row ? "none" : null)};
        }
      }
      p {
        font-size: ${({ row }) => (row ? "15px" : null)};
      }
    }
  }
`;

class CardBlue extends Component {
  render() {
    const { card, ...rest } = this.props;
    return (
      <Card className="CardBlue" {...rest}>
        {card.image ? <img src={card.image} alt="img" /> : null}
        <div className="card_body">
          <div className="copy">
            <h1>
              {card.titleWhite} <br />
              <span>{card.titleBlue} </span>
            </h1>

            {card.copy ? <p>{card.copy}</p> : null}
            {card.copy2 ? <h2>{card.copy2}</h2> : null}
          </div>

          {card.button ? (
            <a href={card.path}>
              <BancoppelBtn> {card.button}</BancoppelBtn>
            </a>
          ) : null}
        </div>
      </Card>
    );
  }
}

export default CardBlue;

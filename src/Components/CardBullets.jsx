import React, { Component } from "react";
import styled from "styled-components";
import CardBlue from "./CardBlue";

const StyledBigCard = styled.div`
  .card {
    display: none;
  }
  .bullets {
    .bullet {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      &:first-child {
        padding-top: 0;
      }
      img {
        margin-right: 20px;
      }
      p {
        max-width: 100%;
        text-align: left;
        font-size: 14px;
        font-family: futura_book;
        line-height: 18px;
        display: flex;

        span {
          font-family: Futura;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 120%;
        }
      }
    }
  }

  @media (min-width: 992px) {
    display: flex;
    .card {
      display: block;
      flex: 1;
      padding-left: 70px;
    }
    .bullets {
      flex: 1.2;

      .bullet {
        width: 60%;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }

    .row-grap {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      align-content: flex-start;
      .bullet {
        width: auto;
        flex: 1 0 40%;
        margin-bottom: 60px;
        margin-right: 30px;

        &:nth-child(even) {
          margin-right: 0;
        }
      }
    }

    .row-grap-flex {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      align-content: flex-start;
      .bullet {
        width: auto;
        flex: 1 0 30%;
        margin-right: 30px;

        &:last-child {
          p {
            max-width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .card {
      padding-left: 100px;
      .CardBlue {
        min-width: 50% !important;
        max-width: 362px !important;
        img {
          width: 100% !important;
          /* max-width: 362px; */
          /* height: 215px !important; */
        }
        .card_body{
          padding: 0px
          padding-top: 10px;
          max-width: 320px;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .bullets{
        margin-left: 50px;
      }
    .card {
      padding-left: 0px;
      .CardBlue {
        /* min-width: 431px !important;
        max-width: 431px !important; */
        /* height: 398px !important; */
        img {
          width: 100% !important;
          max-width: 431px;
          height: 272px !important;
        }
        .card_body{
          width: 400px !important;
          padding: 0px;
          .copy {
            width: 400px !important;
            h3 {
              margin-top: 10px;
              font-size: 21px;
            }
          }
        }
      }
    }
  }
`;

class CardBullets extends Component {
  ClassNameByArrLen(arr) {
    if (arr.length <= 3) {
      return "column";
    } else if (arr.length === 4) {
      return "row-grap";
    } else {
      return "row-grap-flex";
    }
  }
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
        <div className="card">
          <CardBlue card={this.props.data.card} secondary />
        </div>
        <div
          className={`bullets ${this.ClassNameByArrLen(this.props.data.items)}`}
          style={{
            display: "flex",
            flexDirection: "column",

          }}
        >
          {this.props.data.items.map((item, idx) => {
            return (
              <div className="bullet" key={idx} style={{
                display: "flex", 
                flexDirection: "row", 
                marginLeft: "55px", 
                marginBottom:"50px",
                fontFamily: "futura",
                fontSize: "16px",
                color: "#282828",
                lineHeight: "110%",
                }}>

                <img style={{
                  marginRight: "18px",
                  width: "40px",
                  height: "40px",
                }} src={item.icon} alt="item.icon" />
                <p style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "230px"
                }}>
                  {item.bullet ? <span>{item.bullet} </span> : ""}
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardBullets;

import React, { Component } from "react";
import styled from "styled-components";

const StyledSecondaryCard = styled.div`
  background: #002a61;
  border-radius: 15px;
  padding: ${({ hasTitle }) => (hasTitle ? "16px" : "20px")};
  display: flex;
  align-items: center;

  height: 138px;
  width: 100%;

  img {
    height: 40px;
    width: 40px;
  }

  .body_secondary {
    margin-left: 18px;
    h2 {
      font-family: futura_heavy;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 110%;
      color: #81c1ea;
      margin-bottom: 9px;
    }
    p {
      font-family: futura_book;
      font-size: 14px;
      line-height: 120%;
      color: #f4f6f9;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 226px;
    height: 180px;

    img {
      height: 40px;
      width: 40px;
    }

    .body_secondary {
      margin-left: 0px;
      text-align: center;
      margin-top: 12px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 212px;
    height: 180px;
    margin: 5px;
    img {
      height: 39px;
      width: 36px;
    }

    .body_secondary {
      margin-left: 0px;
      text-align: center;
      margin-top: 14px;
    }
  }
  @media (min-width: 1400px) {
    width: 246px;
    height: 226px;
    img {
      height: 66px;
      width: 66px;
    }
  }
`;

class SecondaryCardBlue extends Component {
  render() {
    return (
      <div
        className="SecondaryCardBlue"
        hasTitle={this.props.card.title ? true : false}
        style={{
          background: "#002a61",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "226px",
          height: "246px",
        }}
      >
        {this.props.card.image ? (
          <img
          style={{
            width: "66px",
            height: "66",
            marginTop: "24px"
          }}
           src={this.props.card.image} alt="" />
        ) : null}

        <div className="" style={{
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           padding: "10px",
           textAlign: "center",
        }}>
          {this.props.card.title ? <h2 style={{
            fontFamily: "futura_heavy",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "110%",
            color: "#81c1ea",
            marginBottom: "9px",
            marginTop: "12px",
          }}>{this.props.card.title}</h2> : null}
          {this.props.card.copy ? <p style={{
            fontFamily: "futura_book",
            fontSize: "14px",
            lineHeight: "120%",
            color: "#f4f6f9",
          }}>{this.props.card.copy}</p> : null}
        </div>
      </div>
    );
  }
}

export default SecondaryCardBlue;

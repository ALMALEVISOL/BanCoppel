import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ActiveBtn from "../Assets/circular_active.svg";
// import DisableBtn from "../Assets/circular_disabled.svg";
import styled from "styled-components";
import Container from "./Container";
import CardBlue from "./CardBlue";

const StylesCarousel = styled.div`
  background: var(--light-blue);
  padding: 50px 0;

  display: none;

  .bancoppel_slider {
    margin: auto;
    margin-top: 0;
    max-width: 1230px;
    .slide {
      flex: 1;

      .container {
        width: 90%;
        margin: auto;
        height: 100%;
      }
    }
    .carousel .control-next.control-arrow:before {
      content: "";
      border: solid transparent;
      padding: 18px;
      margin-right: 156px;
      background-image: url(${ActiveBtn});
      background-repeat: no-repeat;
      background-size: contain;
    }

    .carousel .control-prev.control-arrow:before {
      content: "";
      border: solid transparent;
      padding: 18px;
      margin-left: 156px;
      background-image: url(${ActiveBtn});
      background-repeat: no-repeat;
      background-size: contain;
      transform: rotate(135deg);
      -webkit-transform: rotate(180deg);
    }
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0, 0, 0, 0) !important;
  }
  .carousel.carousel-slider .control-arrow {
    height: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    padding: 44px 0px 44px 0; //Padding de la card en te interesa
    display: block;
  }

  @media (min-width: 1200px) {
    padding: 44px 0px 50px 44px;
    .bancoppel_slider {
      .slide {
        .container {
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .bancoppel_slider {
      .carousel .control-next.control-arrow:before {
        margin-right: 42px;
      }

      .carousel .control-prev.control-arrow:before {
        margin-left: 42px;
      }
    }
  }
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidUpdate() {
    if (this.props.items.length === 1 && this.state.currentSlide !== 0) {
      this.setState({
        currentSlide: 0,
      });
    }
  }

  updateCurrentSlide = (idx) => {
    this.setState({
      currentSlide: idx,
    });
  };

  renderCards(cards) {
    return (
      <div
        length={cards.length}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {cards ? (
          cards.map((card, idx) => {
            return (
              <div
                style={{
                  display: "flex",
                  "-webkit-box-pack": "start",
                  justifyContent: "center",
                  margin: "auto !important",
                }}
                className={`item_card ${cards.length === 1 ? "center" : ""}`}
                key={idx}
              >
                <CardBlue card={card} row />
              </div>
            );
          })
        ) : (
          <p>no hay "cards" para mostrar</p>
        )}
      </div>
    );
  }
  renderVerticalCards(cards) {
    return (
      <div
        className="vertical-card-container"
        style={{
          display: "flex",
          overflowY: "hidden",
          overflowX: "scroll",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {cards ? (
          cards.map((card, idx) => {
            return (
              <div
                style={{
                  maxHeight: "522px",
                  height: "522px",
                  maxWidth: "306px",
                  width: "306px",
                  marginRight: "26px",
                }}
                className={`item_card ${cards.length === 1 ? "center" : ""}`}
                key={idx}
              >
                <CardBlue card={card} renderVerticalCard />
              </div>
            );
          })
        ) : (
          <p>no hay "cards" para mostrar</p>
        )}
      </div>
    );
  }

  render() {
    return (
      <StylesCarousel
        showHeader={this.state.mostrarEncabezado}
        className="bancoppel__slider"
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className={`bancoppel_slider ${
            this.props.className ? this.props.className : ""
          }`}
          onChange={(e) => this.updateCurrentSlide(e)}
          selectedItem={this.state.currentSlide}
        >
          {this.props.items.map((item, idx) => {
            // debugger;
            return (
              <div className="slide" key={idx}>
                <Container>
                  {this.props.renderVerticalCard
                    ? this.renderVerticalCards(item, true)
                    : this.renderCards(item, true)}
                </Container>
              </div>
            );
          })}
        </Carousel>
      </StylesCarousel>
    );
  }
}

export default Slider;

import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Hero,
  ConoceCredito,
  Accordion,
  CardBlue,
  ResponsiveHeader,
  Switcher,
  Slider,
} from "../Components";
import styled from "styled-components";
import Hero_ from "../Assets/Heros/hero_home.jpg";
import Hero_mid from "../Assets/Heros/hero_home_mid.jpg";
import Hero_responsive from "../Assets/Heros/hero_home_responsive.jpg";
import HeroHome from "../Assets/Heros/line1.svg";
import Catalogo from "../Catalogo_Productos";
import "./Animation.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const StyledHome = styled.div`
  .btn {
    width: 197px;
  }
  @media (min-width: 992px) {
    .hero_container {
      .container {
        .children {
          .subchildren {
            h2 {
              width: 362px;
              height: 75px;
            }
            img {
              margin-top: -157px;
            }
            .padresubtitle {
              .subtitle {
                width: 350px;
                height: 62px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .hero_container {
      .container {
        .children {
          .subchildren {
            img {
              margin-top: -170px;
              width: 22px;
              margin-left: 3px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    .hero_container {
      .container {
        .children {
          .subchildren {
            h2 {
              width: 500px;
              height: 90px;
            }
            img {
              height: 144px;
              margin-top: -180px;
              width: 24px;
              margin-left: 1px;
            }
          }
        }
      }
    }
  }
`;

const StyledCards = styled.div`
  padding: 10px 0;
  display: flex;
  overflow-x: scroll;

  .CardBlue {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

const StyledCardsSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.length === 1 ? 1 : 2)},
    1fr
  );
  grid-gap: 26px;
  .center {
    margin: auto !important;
  }
  .item_card {
    display: flex;
    justify-content: flex-start;
    margin: auto;
    &:nth-child(odd) {
      margin-right: 0;
    }
    &:nth-child(even) {
      margin-left: 0;
      justify-content: flex-end;
    }
  }
  .CardBlue {
    width: 100%;
    .card_body {
      .copy {
        padding: 0px 0px 10px 10px;
      }
    }
  }
  @media (min-width: 1200px) {
    .CardBlue {
      width: 100%;
      min-width: 423px;
    }
  }
`;
const titleBanner = "LA BANCA QUE TU EMPRESA NECESITA";
const subtitle = (
  <p>
    Brindamos <span> soluciones</span> a tu<span> empresa</span>
  </p>
);
class Home extends Component {
  constructor(props) {
    super(props); //escribí props
    //this.renderCards = this.renderCards.bind(this);
    this.state = {};
  }

  async componentDidMount() {
    var sections = await [
      ...new Set(Catalogo.map((producto) => producto.family)),
    ].map((item) => ({
      section: item,
      cards: Catalogo.filter((producto) => producto.family === item),
    }));

    this.setState({
      HomeSections: sections,
    });
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

  //ADM 20220116 Se sacan estás funciones para que renderize bien en IE 10
  renderCards = (cards, flag) => {
    // debugger;
    return (
      <StyledCardsSlider length={cards.length}>
        {cards ? (
          cards.map((card, idx) => {
            return (
              <div
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
      </StyledCardsSlider>
    );
  };

  holaCards(cards) {
    return (
      <StyledCardsSlider length={cards.length}>
        {cards ? (
          cards.map((card, idx) => {
            return (
              <div
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
      </StyledCardsSlider>
    );
  }

  bodySlider(data) {
    if (!data || !data.section) {
      return;
    }
    const arrays = [];
    if (data.cards && data.cards.length > 0) {
      for (var i = 0; i < data.cards.length; i += 4) {
        arrays.push(data.cards.slice(i, i + 4));
      }
      if (arrays && arrays.length > 0) {
        // debugger;
        return (
          <TransitionGroup className="carousel-anim">
            <CSSTransition
              key={data.section}
              timeout={500}
              classNames="caritem"
            >
              <Slider
                items={arrays}
                bodyAdm={this.renderCards}
                holaCards={this.holaCards}
                alex="alex"
              />
            </CSSTransition>
          </TransitionGroup>
        );
      }
    }
  }
  render() {
    return this.state.HomeSections ? (
      <>
        <Helmet>
          {/* <!-- Primary Meta Tags --> */}
          <title>Banca Empresarial BanCoppel | BanCoppel.com</title>
          <meta
            name="title"
            content="Banca Empresarial BanCoppel | BanCoppel.com"
          />
          <link rel="canonical" href="https://www.bancoppel.com/empresas" />
          <meta
            name="keywords"
            content="banca empresarial, bancoppel, banco, empresa, negocio,  cuenta de inversion, cuenta de nomina, credito"
          />
          <meta
            name="description"
            content="Conoce más sobre Banca Empresarial BanCoppel, cuentas de nómina, cuentas de inversión, crédito y muchos más beneficios para tu negocio."
            data-react-helmet="true"
          />
        </Helmet>
        <StyledHome>
          <ResponsiveHeader>
            <div className="title">
              <h2>La Banca que</h2>
              <h2>
                tu empresa <br /> necesita
              </h2>
            </div>
            <div className="copy">
              <h4>
                Brindamos <span>soluciones </span>
              </h4>
              <h4>
                a tu <span>empresa</span>
              </h4>
            </div>
          </ResponsiveHeader>

          <Hero
            btnCoppy="Me interesa"
            imagen={Hero_}
            responsiveImg={Hero_responsive}
            midImg={Hero_mid}
            banner={HeroHome}
            path="/empresas/contacto"
            titleBanner={titleBanner}
            subtitle={subtitle}
          />
          <Accordion items={this.state.HomeSections} body={this.body} />
          <Switcher
            items={this.state.HomeSections}
            body={this.bodySlider}
            noContainer
          />
          <ConoceCredito />
        </StyledHome>
      </>
    ) : null;
  }
}

export default Home;

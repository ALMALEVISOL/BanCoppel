import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, BancoppelBtn, Spin } from "./index";
import Fondo_mujer from "../Assets/Heros/hero_home.jpg";
import Fondo_mujer_res from "../Assets/Heros/hero_home_responsive.jpg";
import bannerDeafult from "../Assets/Heros/line1.svg";

const StyledHero = styled.div`
  display: flex;
  max-height: 400px;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
  .Fondo_mujer {
    display: none;
  }

  .Fondo_mujer_mid {
    display: none;
  }
  .hero_container {
    display: none;
  }
  @media (min-width: 500px) {
    .Fondo_mujer_res {
      display: none;
    }
    .Fondo_mujer_mid {
      display: block;
    }
  }

  @media (min-width: 768px) {
    .Fondo_mujer_mid {
      display: none;
    }
    .Fondo_mujer {
      display: block;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 100vw;
    }
    .hero_container {
      display: block;
      position: absolute;
      width: 100vw;
      top: 0;
      bottom: 0;

      .container {
        height: 100%;
        display: flex;
        align-items: center;
        .children {
          width: 60%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .subchildren {
            h2 {
              text-transform: uppercase;
              padding-top: 5px;
              padding-left: 25px;
              width: 468px;
              height: 70px;
              font-family: futura_heavy;
              font-size: 32px;
              margin-bottom: 30px;
              text-transform: uppercase;
              color: #ffffff;
            }
            .padresubtitle {
              padding-left: 25px;
              padding-bottom: 70px;
              .subtitle {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                background: #002a61;
                max-width: 400px;
                height: 64px;
                padding: 10px;
                border-radius: 16px;
                font-family: futura_book;
                font-size: 18px;
                color: #ffffff;
                p {
                  span {
                    font-family: futura_heavy;
                    color: white;
                    font-size: 18px;
                  }
                }
              }
            }
            img {
              width: 20px;
              margin-top: -160px;
              margin-left: 5px;
              position: absolute;
            }
            button {
              margin-left: 30px;
              align-self: flex-start;
              margin-top: 13px;
              font-family: futura_heavy;
              font-style: normal;
              font-weight: bold;
              font-size: 14px;
              width: 156px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    max-height: 400px;
    img {
      height: 400px;
    }
    .hero_container {
      .container {
        .children {
          .subchildren {
            h2 {
              height: 80px;
              font-size: 32px;
              padding-top: 0px;
            }
            img {
              width: 22px;
              height: 133px;
              margin-top: -170px;
              margin-left: 3px;
              max-width: 505px;
            }
            button {
              margin-top: 35px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1400px) {
    max-height: 500px;
    img {
      height: 500px;
    }
    .hero_container {
      .container {
        .children {
          .subchildren {
            h2 {
              font-size: 44px;
            }
            img {
              width: 23px;
              height: 142px;
              margin-top: -170px;
              margin-left: 3px;
              max-width: 505px;
            }
          }
        }
      }
    }
  }
`;

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: true,
      copy: true,
    };
  }

  render() {
    const {
      banner,
      btnCoppy,
      imagen,
      responsiveImg,
      midImg,
      titleBanner,
      subtitle,
    } = this.props;

    return (
      <>
        <StyledHero className="fade-in-fast hero__">
          <img
            src={imagen ? imagen : Fondo_mujer}
            alt="Fondo_mujer"
            className="Fondo_mujer"
            onLoad={(e) => this.setState({ hero: false })}
          />
          <img
            src={responsiveImg ? responsiveImg : Fondo_mujer_res}
            alt="Fondo_mujer"
            className="Fondo_mujer_res"
          />
          <img
            src={midImg ? midImg : Fondo_mujer_res}
            alt="Fondo_mujer"
            className="Fondo_mujer_mid"
          />
          <div className="hero_container" style={{}}>
            <Container>
              <div className="children">
                <div className="subchildren">
                  <h2>{titleBanner}</h2>

                  <div className="padresubtitle">
                    <div className="subtitle">{subtitle}</div>
                  </div>
                  <img
                    src={banner ? banner : bannerDeafult}
                    alt="banner"
                    onLoad={(e) => this.setState({ copy: false })}
                  />
                  <Link to={"/contacto"}>
                    <BancoppelBtn amarillo>
                      {btnCoppy ? btnCoppy : "no copy"}
                    </BancoppelBtn>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </StyledHero>
        {(this.state.hero || this.state.copy) && <Spin />}
      </>
    );
  }
}

export default Hero;

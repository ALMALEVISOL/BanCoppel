import React, { Component } from "react";
import {
  Container,
  Hero,
  BancoppelBtn,
  Accordion,
  Switcher,
  ProductHeader,
  ListaProductos,
  CardBullets,
  ListCardsSecondary,
  Requisitos,
  PerfilSolicitante,
  TeInteresa,
  // ListBullets,
} from "../../Components";
import Hero_ from "../../Assets/Heros/hero_monetizacion.png";
import Hero_responsive from "../../Assets/Heros/hero_responsive_monetizacion.png";
import HeroHome from "../../Assets/Heros/banner_monetizacion.svg";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .title {
    margin-bottom: 20px;
    h1 {
      text-transform: uppercase;
      color: var(--sky-blue);
      line-height: 35px;
      &:first-child {
        color: var(--night-blue);
      }
    }
  }
  .copy {
    margin-bottom: 20px;
    h4 {
      color: var(--night-blue);
      font-family: futura_normal;
      font-weight: 500;
    }
  }
  .btn{
  width: 197px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledPruductHeader = styled.div`
  .header_product {
    text-align: center;
    color: var(--night-blue);
    span {
      color: var(--sky-blue);
    }
  }
`;

class MonetizacionActivos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  body(data, mobile) {
    switch (data.section) {
      case "Beneficios":
        return <CardBullets data={data} />;
      case "Características":
        return <ListCardsSecondary cards={data.cards} />;
      case "Requisitos":
        return (
          <>
            <Requisitos
              push={{ data: "Contrato de Arrendamiento vigente.", idx: 1 }}
            />
            {mobile ? <TeInteresa /> : null}
          </>
        );
      case "Perfil del solicitante":
        return (
          <PerfilSolicitante
            bullets={[
              <>
                Personas Físicas con Actividad
                <br /> Empresarial.
              </>,
              <>
                Propietarios de un inmueble que <br /> arrienden a Grupo Coppel.
              </>,
              "Personas Morales.",
            ]}
          />
        );
      default:
        console.error("No hay solucion definida", data);
    }
  }
  isRequisitos(elem) {
    if (elem.section === "Requisitos") {
      this.setState({
        Requisitos: true,
      });
    } else {
      this.setState({
        Requisitos: false,
      });
    }
  }

  render() {
    return (
      <>
        <StyledHeader>
          <Container>
            <div className="title">
              <h1>Arrendamiento</h1>

              <h1>a largo plazo</h1>
            </div>
            <div className="copy">
              <h4>
                El financiamiento que <br /> estabas buscando
              </h4>
            </div>
            <BancoppelBtn amarillo>Regístrate</BancoppelBtn>
          </Container>
        </StyledHeader>
        <Hero
          btnCoppy="Me interesa"
          imagen={Hero_}
          responsiveImg={Hero_responsive}
          banner={HeroHome}
          path="/"
        />
        <ProductHeader>
          <StyledPruductHeader>
            <h1 className="header_product">
              Monetización <span>de Activos</span>
            </h1>
          </StyledPruductHeader>
        </ProductHeader>
        <Accordion items={SolucionesCreditoSections} body={this.body} />
        <Switcher
          items={SolucionesCreditoSections}
          body={this.body}
          isRequisitos={this.isRequisitos.bind(this)}
        />
        {this.state.Requisitos ? <TeInteresa /> : null}
        <ListaProductos />
      </>
    );
  }
}

export default MonetizacionActivos;

const SolucionesCreditoSections = [
  {
    section: "Beneficios",

    card: {
      image: require("../../Assets/Persons3.png").default,
      copy2:
        "Servicio que brinda la facilidad de transferir de forma masiva o individual el dinero que quieras cuando quieras.",
    },

    items: [
      {
        icon: require("../../Assets/credit_card_blue.svg").default,
        copy: "Otorga liquidez para capital de trabajo.",
      },
      {
        icon: require("../../Assets/mano_casa.svg").default,
        copy: "Genera valor al inmueble del arrendador.",
      },
      {
        icon: require("../../Assets/mano_casa.svg").default,
        copy: "Contrato de Arrendamiento vigente.",
      },
    ],
  },
  {
    section: "Requisitos",
  },
  {
    section: "Perfil del solicitante",
  },
  {
    section: "Características",
    cards: [
      {
        title: "DESTINO",
        copy: "Capital de trabajo de largo plazo.",
        image: require("../../Assets/hand_money.svg").default,
      },
      {
        title: "MONTO DE LÍNEA",
        copy: "Hasta el 85% del VPN de las rentas remanentes menos 3 meses.",
        image: require("../../Assets/hand_coins.svg").default,
      },
      {
        title: "FORMA DE PAGO",
        copy: "Pago mensual de capital e intereses.",
        image: require("../../Assets/gear_coin.svg").default,
      },
      {
        title: "TASA",
        copy: "Variable..",
        image: require("../../Assets/money_plant.svg").default,
      },
      {
        title: "COMISIONES",
        copy: "Por apertura.",
        image: require("../../Assets/card_coins.svg").default,
      },
      {
        title: "PLAZO",
        copy: "Hasta el plazo del contrato de arrendamiento vigente menos 3 meses.",
        image: require("../../Assets/calendar_bill.svg").default,
      },
    ],
  },
];
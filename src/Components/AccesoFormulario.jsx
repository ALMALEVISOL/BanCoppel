import "core-js"; //diferente
import React, { Component } from "react";
import styled from "styled-components";
import { InputBancoppel, BancoppelBtn } from ".";
import security from "../Assets/icon_seguridad.svg";

const StyledAccesoFormulario = styled.div`
  position: relative;
  margin: 0px 0;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  form {
    padding-top: 30px;
    width: 300px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      width: 280px;
    }
    .top-text {
      display: flex;
      font-family: Futura;
      font-size: 12px;
      line-height: 110%;
      text-align: center;
      color: #636363;
      margin-bottom: 22px;
      img {
        margin-right: 6px;
      }
    }
    .form_item {
      margin-bottom: 20px;
      width: 100%;

      &:last-child {
        margin-bottom: 0px;
      }
      button {
        margin: auto;
        width: 120px;
        height: 50px;
      }
      p {
        color: var(--sky-blue);
        text-align: center;
      }
    }
    .forgot {
      font-family: Futura;
      font-size: 14px;
      line-height: 130%;
      text-decoration-line: underline;
      color: #338cbf;
      text-align: center;
      cursor: pointer;
    }
    .back_blue {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #225aa7;
      height: 56px;
      width: 100%;
      border-radius: 0px 0px 10px 10px;
      p {
        font-family: futura;
        font-size: 16px;
        line-height: 19px;
        color: white;
      }
      span {
        color: #338cbf;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 576px) {
    margin-bottom: 60px;
    form {
      width: 436px !important;
      input {
        width: 354px;
      }
      .top-text {
        font-size: 14px;
      }
    }
  }
`;
export default class AccesoFormulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contraseña: "",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <StyledAccesoFormulario>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="top-text">
            <img src={security} alt="icon_security" />
            <p>Usted se encuentra en un entorno seguro</p>
          </div>
          <div className="form_item">
            <InputBancoppel
              type="text"
              label="Usuario"
              name="usuario"
              id="usuario"
              value={this.state.usuario}
              onChange={(e) => this.onChange(e)}
              required
            />
          </div>
          <div className="form_item">
            <InputBancoppel
              type="password"
              label="Contraseña"
              name="contraseña"
              id="contraseña"
              value={this.state.contraseña}
              onChange={(e) => this.onChange(e)}
              // required
            />
          </div>
          <div className="form_item">
            <BancoppelBtn
              amarillo
              type="submit"
              data-callback="onSubmit"
              data-action="submit"
              // onClick={() => this.gtHLEmp()}
            >
              Entrar
            </BancoppelBtn>
          </div>
          <div className="form_item forgot">
            <p>¿Olvidaste tu usuario/contraseña?</p>
          </div>
          <div className="back_blue">
            <p>
              ¿Eres usuario nuevo? <span>Regístrate</span>
            </p>
          </div>
        </form>
      </StyledAccesoFormulario>
    );
  }
}

import "core-js";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./Components";

import Home from "./Views/Home";
import NominasBanCoppel from "./Views/NominasBanCoppel";
import EmpresaNet from "./Views/EmpresaNet";
import CuentaInversionEmpresarial from "./Views/CuentaInversionEmpresarial";
import FormularioContacto from "./Views/FormularioContacto";

// Soluciones credito
// import Crav from "./Views/SolucionesCredito/Crav";
import CreditoSimple from "./Views/SolucionesCredito/CreditoSimple";
import CreditoPuente from "./Views/SolucionesCredito/CreditoPuente";
import ArrendamientoFinanciero from "./Views/SolucionesCredito/ArrendamientoFinanciero";

import SolucionesIntegrales from "./Views/SolucionesIntegrales/Factoraje";
import MonetizacionActivos from "./Views/SolucionesIntegrales/MonetizacionActivos";
import FinanciamientoOrdenesCompra from "./Views/SolucionesIntegrales/FinanciamientoOrdenesCompra";
import ProyectosInversion from "./Views/SolucionesIntegrales/ProyectosInversion";
import CreditoAmortizable from "./Views/SolucionesCredito/CreditoAmortizable";
import Acceso from "./Views/Acceso";

class App extends Component {
  render() {
    return (
      <div className="bancoppel">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/credito-simple">
            <CreditoSimple />
          </Route>
          <Route path="/credito-cuenta-corriente">
            <CreditoAmortizable />
          </Route>
          <Route path="/credito-puente">
            <CreditoPuente />
          </Route>
          <Route path="/arrendamiento-financiero">
            <ArrendamientoFinanciero />
          </Route>
          <Route path="/nomina-bancoppel">
            <NominasBanCoppel />
          </Route>
          <Route path="/empresanet">
            <EmpresaNet />
          </Route>
          <Route path="/cuenta-inversion-empresarial">
            <CuentaInversionEmpresarial />
          </Route>
          <Route path="/factoraje-financiero">
            <SolucionesIntegrales />
          </Route>
          <Route path="/monetizacion-de-activos">
            <MonetizacionActivos />
          </Route>
          <Route path="/financiamiento-ordenes-de-compra">
            <FinanciamientoOrdenesCompra />
          </Route>
          <Route path="/proyectos-de-inversion">
            <ProyectosInversion />
          </Route>
          <Route exact path="/contacto">
            <FormularioContacto />
          </Route>
          <Route path="/login">
            <Acceso />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

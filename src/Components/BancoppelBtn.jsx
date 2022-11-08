import "core-js";
import React from "react";
import CssExplorer from "../CSS/CssExplorer.css"

/*
//padding: 0 10px;
//height: 37px;
//min-width: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-family: futura_heavy;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  border: ${(props) =>
    !props.amarillo && !props.secundario ? "2px solid var(--storm-blue)" : 0};

  //background: var(--white);
  background: ${(props) => (props.secundario ? "var(--storm-blue)" : "")};
  background: ${(props) => (props.amarillo ? "var(--summer-yellow)" : "")};
  background: ${(props) => (props.disabled ? "var(--gray)" : "")};
  background: ${(props) => (props.tercero ? "var(--night-blue)" : "")};

  color: var(--storm-blue);
  color: ${(props) => (props.secundario ? "var(--white)" : "")};
  color: ${(props) => (props.disabled ? "var(--white)" : "")};
  color: ${(props) => (props.amarillo ? "var(--night-blue)" : "")};
  color: ${(props) => (props.tercero ? "var(--white)" : "")};

   &:hover {
    background-color: #225AA7;
    color: white;
  }
  

  @media (min-width: 576px) {
    height: 50px;
    width: 120px;
  }

  @media (min-width: 992px) {
    width: 150px;
  }
*/
const backgroundObject = {
  secundario : "#225AA7" ,
  amarillo : "var(--summer-yellow)",
  disabled : "var(--gray)",
  tercero : "var(--night-blue)",
}




const Button = (props) => {
  console.log("PROPS", props)
  const { children } = props;
  return <button className="BancoppelBtn" style={{ 
  background: "var(--white)",
  color: "var(--storm-blue)",
  padding: "0 10px",
  height: "50px",
  minWidth: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer", //Pendiente
  fontFamily: "futura_heavy",
  fontSize: "14px",
  borderRadius: "10px",
  transition: "all 0.2s ease-in-out",
  cursor: props.disabled ? "default" : "pointer",
  border: !props.amarillo && !props.secundario ? "2px solid #225AA7" : 0,

  // BACKGOUND
  background: backgroundObject[Object.hasOwnProperty('')],
   //COLOR
  color: props.secundario ? "var(--white)" : "",
  color: props.disabled ? "var(--white)" : "",
  color: props.amarillo ? "var(--night-blue)" : "",
  color: props.tercero ? "var(--white)" : "",
    }}>
       
  {children} 
  </button>;
};

export default Button;

//Diferente
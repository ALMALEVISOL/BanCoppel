import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import AddIcon from "../Assets/AddIcon.svg";
import restIcon from "../Assets/rest_icon.svg";

const AccordionCoppel = ({ items, body }) => {
  const [state, setstate] = useState(null);
  function chanState(idx) {
    if (state === idx) {
      setstate(null);
    } else {
      setstate(idx);
    }
  }

  return (
    <div className="styled-accordion" style={{
      background: "var(--light-blue)",
      padding: "25px 0"
    }} >
    <Container>
      <Accordion allowZeroExpanded={true}>
        {items.map((item, idx) => {
          return (
           <div className="second-styled-accordion" key={idx} arr={items} id={idx}
           styled={{
            paddingBottom: "10px",

           }}>
            <AccordionItem>
              <AccordionItemHeading
                className="heading"
                onClick={(e) => chanState(idx)}
              >
                <AccordionItemButton 
                style={{borderBottom: items.length - 1 === idx ? "0" : "1px solid var(--shadow-blue)",}}
                  className={`accordion-header ${
                    state === idx ? "active" : ""
                  }`}
                >
                  <p>{item.section}</p>
                  <img src={state === idx ? restIcon : AddIcon} alt="" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-body">
                {body
                  ? body(item, true)
                  : console.error(
                      "Necesitas una funcion que rendere el cuerpo de cada item. De esta forma podemos ocupar el mismo componente, con los mismos headers pero cambiando solo el cuerpo de cada acordeón según se necesite."
                    )}
              </AccordionItemPanel>
            </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </Container>
    </div>
  );
};

export default AccordionCoppel;



//DIFERENTE
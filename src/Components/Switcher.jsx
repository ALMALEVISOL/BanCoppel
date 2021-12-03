import React, { Component } from "react";
import Container from "./Container";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyledSwitch = styled.div`
  background: var(--light-blue);
  padding: 29px 0;
  display: none;
  .sections {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 40px;

    .section {
      padding: 10px;
      border-bottom: 2px solid var(--shadow-blue);
      cursor: pointer;

      h3 {
        font-family: futura_bold;
        text-align: center;
        color: var(--light-gray);
        font-weight: bold;
        font-size: 14px;
        margin-left: 10px;
      }

      &:hover {
        border-bottom: 2px solid var(--yellow);
        h3 {
          text-align: center;
          color: var(--storm-blue);
        }
      }
    }

    .current {
      border-bottom: 2px solid var(--yellow);
      h3 {
        text-align: center;
        color: #002a61;
      }
    }
  }
  @media (min-width: 992px) {
    padding-top: 44px;
    padding-bottom: 63px;
    display: block;
  }
  .bancoppel__slider {
    padding: 0 !important;
  }
  @media (min-width: 1400px) {
    padding-bottom: 63px;
    display: block;
  }
`;

class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currenView: {
        section: null,
      },
    };
  }

  selectedView(view) {
    this.setState({
      currenView: view,
    });
    if (this.props.isRequisitos) {
      this.props.isRequisitos(view);
    }
  }

  componentDidMount() {
    this.setState({
      currenView: this.props.items[0],
    });
  }

  innerRender() {
    return this.props.noContainer ? (
      this.props.body(this.state.currenView)
    ) : (
      <Container>{this.props.body(this.state.currenView)}</Container>
    );
  }

  render() {
    return this.state.currenView ? (
      <StyledSwitch>
        <Container>
          <div className="sections">
            {this.props.items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`section ${
                    this.state.currenView.section === item.section
                      ? "current"
                      : ""
                  }`}
                  onClick={() => this.selectedView(item)}
                >
                  <h3>{item.section}</h3>
                </div>
              );
            })}
          </div>
        </Container>
        {this.state.currenView.section ? (
          <TransitionGroup className="carousel-anim">
            <CSSTransition
              key={this.state.currenView.section}
              timeout={500}
              classNames="caritem"
            >
              {this.innerRender()}
            </CSSTransition>
          </TransitionGroup>
        ) : (
          this.innerRender()
        )}
      </StyledSwitch>
    ) : null;
  }
}

export default Switcher;

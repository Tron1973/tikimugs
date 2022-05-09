import React from "react";
import styled from "styled-components";
import { GiTotemMask } from "react-icons/gi";
import { BrowserRouter, Link } from "react-router-dom";
import Categories from "./components/Catgories";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiTotemMask className="tiki-logo" />
          <Logo to={"/"}>TIKI MANOR</Logo>
          <GiTotemMask className="tiki-logo" />
        </Nav>
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 8vh;
  font-weight: 400;
  font-family: "Fontdiner Swanky", cursive;
  line-height: 4.5rem;
  color: #fff;
  text-shadow: 5px 3px 3px #ff4500;
  @media screen and (max-width: 619px) {
    line-height: 3rem;
    font-size: 5.5vh;
  }
`;

const Nav = styled.div`
  max-width: 100%;
  height: 20vh;
  background-image: linear-gradient(-225deg, #20e2d7 0%, #f9fea5 100%);
  padding: 2rem 0rem;
  margin-top: 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 6px 9px #a8a8a8;
  svg {
    font-size: 12vw;
  }
  @media screen and (max-width: 619px) {
    border-radius: 0rem;
    height: 20vh;
    svg {
      font-size: 12vw;
      margin: 1rem;
    }
  }
`;

export default App;

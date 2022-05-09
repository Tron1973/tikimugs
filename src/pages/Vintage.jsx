import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Data from "../data.json";

function Vintage() {
  return ( 
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        {Data &&
          Data.map((tiki) => {
            return (
              <div key={tiki.id}>
                {tiki.type === "vintage" ? (
                  <>
                  <Card>
                    <img src={tiki.image} alt="tiki" />
                    <h3>{tiki.title}</h3>
                    <h4>{tiki.year}</h4>
                    <p>{tiki.text}</p>
                  </Card>         
                  </>
                ) : null}
              </div>
            );
          })}
      </Container>
  );
}

const Container = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: -2rem;
`;

const Card = styled.div`
min-height: 35rem;
width: 35rem;
border-radius: 2rem;
overflow: hidden;
position: relative;
margin: 2rem;
box-shadow: 6px 6px 9px #8a8a8a;
img {
  border-radius: 2rem;
   position: absolute;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: -1;
}
h4 {
   position: absolute;
   z-index: 10;
   left: 50%;
   bottom: 0%;
   transform: translate(-50%, -165%);
   color: white;
   width: 100%;
   text-align: center;
   font-weight: 600;
   font-size: 1.5rem;
   height: 40%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-shadow: 3px 3px 3px #5a5a5a;
}
h3 {
  position: absolute;
   z-index: 10;
   left: 50%;
   bottom: 0%;
   transform: translate(-50%, -168%);
   color: white;
   width: 100%;
   text-align: center;
   font-weight: 600;
   font-size: 2rem;
   height: 40%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-shadow: 3px 3px 3px #5a5a5a;
}
p {
  position: absolute;
   z-index: 10;
   left: 50%;
   bottom: 0%;
   transform: translate(-50%, 30%);
   color: white;
   text-align: center;
   font-weight: 600;
   font-size: 1.1rem;
   height: 40%;
   width: 90%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-shadow: 3px 3px 3px #5a5a5a;
}
@media screen and (max-width: 619px) {
  min-height: 30rem;
  width: 90vw;
  overflow: hidden;
  position: relative;
  margin: 2rem;
  img {     
   object-fit: cover;
   width: 100%;
   height: 100%;
   
  }
  p {
    font-size: 1rem;
    width: 70vw;
    margin-left: 0rem;
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
   line-height: 1.2rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  h3 {
    font-size: 1.3rem;
    line-height: 1.4rem;
    width: 75vw;
    margin-bottom: 1.5rem;
  }
}

`;

export default Vintage;

import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Data from "../data.json";

function Tiki() {

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
                  
                    <Card>
                      <img src={tiki.image} alt="tiki" />
                      <h3>{tiki.title}</h3>
                      <h4>{tiki.year}</h4>
                    </Card>
                  
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
    
`;
  
const Card = styled.div`
  min-height: 30rem;
  width: 30rem;
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
  h3,
  h4 {
     position: absolute;
     z-index: 10;
     left: 50%;
     bottom: 0%;
     transform: translate(-50%, 36%);
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
    font-size: 1.75rem;
    text-shadow: 3px 3px 3px #5a5a5a;
    transform: translate(-50%, -165%);
  }
`;

export default Tiki
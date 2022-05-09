import React from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Data from '../data.json';

function Carousel() {
    return (
        <Wrapper>
            <Splide
                 options={{
                    perPage: 3,
                    autoplay: true,
                    arrows: false,
                    pagination: false,
                    perMove: 2,
                    interval: 3000,
                    speed: 1000,
                    drag: 'free',
                    gap: '3rem',
                    type: 'loop',
                    width: '30rem',  
                 }}
                 >
          {Data &&
            Data.map((tiki) => {
              return (
                <SplideSlide>
                  {tiki.type ? (
                    <Card>
                      <img src={tiki.image} alt="tiki" key={tiki.id} />
                    </Card>
                  ) : null}
                </SplideSlide>
              );
            })}
            </Splide>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0rem;
    @media screen and (max-width: 420px) {
      width: 51%;
      margin: 2rem 0rem;
    }
`;

const Card = styled.div`
    height: 10rem;
    width: 8rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default Carousel;
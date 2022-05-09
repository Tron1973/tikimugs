import React from 'react';
import { GiTotemHead, GiMechaMask, GiCeremonialMask, GiTribalMask } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Categories() {
  return (
    <List>
        <SLink to={'/src/pages/Vintage.jsx'} >
            <GiTotemHead />
            <h4>Vintage</h4>
        </SLink>
        <SLink to={'/src/pages/Modern.jsx'}>
            <GiMechaMask />
            <h4>Modern</h4>
        </SLink>
        <SLink to={'/src/pages/Novelty.jsx'}>
            <GiCeremonialMask />
            <h4>Novelty</h4>
        </SLink>
        <SLink to={'/src/pages/All.jsx'}>
            <GiTribalMask />
            <h4>All</h4>
        </SLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink =styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: .5rem;
    text-decoration: none;
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transform: scale(0.8);
    box-shadow: 3px 4px 6px #a8a8a8;
    h4 {
        color: white;
        font-size: 1.2rem;
    }
    svg {
        color: white;
        font-size: 4rem;   
    }
    &.active {
           background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
          svg {
              color: #5a5a5a;   
          }
          h4 {
              color: #ff8c00;;
          }
    }
    :hover {
        background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
          svg {
              color: #5a5a5a;   
          }
          h4 {
              color: #ff8c00;;
          }
    } 
    @media screen and (max-width: 619px) {
        width: 5.5rem;
        height: 5.5rem;
        
        h4 {
            font-size: .9rem;
        }
        svg {
            font-size: 2.5rem;
        }
    }  
}
`;

export default Categories;
import React from 'react';
import styled from 'styled-components';

const FullHistory = ({ codeHistory, newGameShow, timeOver, access }) => {
  return (
    <StyledFullHistory className={(access || timeOver) && !newGameShow ? 'to-top' : ''}>
      <h3>Előzmények</h3>
      {codeHistory && codeHistory.map((code, i) => 
        <Line key={i}>
          <div className={`color ${code[0].goodPlace ? 'green' : !code[0].goodPlace && code[0].goodNumber ? 'yellow' : 'red'}`} >{code[0].number}</div>
          <div className={`color ${code[1].goodPlace ? 'green' : !code[1].goodPlace && code[1].goodNumber ? 'yellow' : 'red'}`} >{code[1].number}</div>
          <div className={`color ${code[2].goodPlace ? 'green' : !code[2].goodPlace && code[2].goodNumber ? 'yellow' : 'red'}`} >{code[2].number}</div>
          <div className={`color ${code[3].goodPlace ? 'green' : !code[3].goodPlace && code[3].goodNumber ? 'yellow' : 'red'}`} >{code[3].number}</div>
          <div className={`color ${code[4].goodPlace ? 'green' : !code[4].goodPlace && code[4].goodNumber ? 'yellow' : 'red'}`} >{code[4].number}</div>
        </Line>
      )}
    </StyledFullHistory>
  )
}

const StyledFullHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  height: 100%;
  width: 250px;
  align-items: center;
  padding:  .5rem 1.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  background: rgb(5,5,5);
  background: linear-gradient(52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);

  &.to-top {
    z-index: 60;
  }

  @media screen and (max-width: 600px) {
    width: 350px;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }

  h3 {
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-family: 'Space Mono', monospace;
    font-weight: 100;
    color: white;
  }

  &::-webkit-scrollbar {
    width: .2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #d7d7d7;
  }
`;

const Line = styled.div`
  display: flex;
  gap: 1.25rem;
  font-family: 'VT323', monospace;
  
  .color {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.2rem;

    &.green {
      color: #76ff00;
    }

    &.yellow {
      color: yellow;
    }

    &.red {
      color: red;
    }
  }
`;

export default FullHistory;

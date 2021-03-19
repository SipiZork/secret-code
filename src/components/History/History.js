import React from 'react';
import styled from 'styled-components';

const History = ({ codeHistory }) => {
  return (
    <StyledHistory>
      {codeHistory && codeHistory.map((code, i) => {
        return (i < 5 &&
          <Line key={i}>
            <div className={`color ${code[0].goodPlace ? 'green' : !code[0].goodPlace && code[0].goodNumber ? 'yellow' : 'black'}`} >{code[0].number}</div>
            <div className={`color ${code[1].goodPlace ? 'green' : !code[1].goodPlace && code[1].goodNumber ? 'yellow' : 'black'}`} >{code[1].number}</div>
            <div className={`color ${code[2].goodPlace ? 'green' : !code[2].goodPlace && code[2].goodNumber ? 'yellow' : 'black'}`} >{code[2].number}</div>
            <div className={`color ${code[3].goodPlace ? 'green' : !code[3].goodPlace && code[3].goodNumber ? 'yellow' : 'black'}`} >{code[3].number}</div>
            <div className={`color ${code[4].goodPlace ? 'green' : !code[4].goodPlace && code[4].goodNumber ? 'yellow' : 'black'}`} >{code[4].number}</div>
          </Line>
      )}
      )}
    </StyledHistory>
  )
}

const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const Line = styled.div`
  display: flex;
  gap: .5rem;
  
  .color {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    font-family: 'VT323', monospace;

    &.green {
      background: green;
    }

    &.yellow {
      background: yellow;
      color: black;
    }

    &.black {
      background: black;
    }
  }
`;

export default History;

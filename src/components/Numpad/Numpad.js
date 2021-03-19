import React from 'react';
import styled from 'styled-components';

const Numpad = ({ setData, setTip, delCharacter }) => {

  return (
    <StyledNumpad>
      <button onClick={() => setData(7)}>7</button>
      <button onClick={() => setData(8)}>8</button>
      <button onClick={() => setData(9)}>9</button>
      <button onClick={() => setData(4)}>4</button>
      <button onClick={() => setData(5)}>5</button>
      <button onClick={() => setData(6)}>6</button>
      <button onClick={() => setData(1)}>1</button>
      <button onClick={() => setData(2)}>2</button>
      <button onClick={() => setData(3)}>3</button>
      <button onClick={() => delCharacter()}>C</button>
      <button onClick={() => setData(0)}>0</button>
      <button onClick={() => setTip()}>OK</button>
    </StyledNumpad>
  )
}

const StyledNumpad = styled.div`
  padding: .01rem;
  height: 100%;
  display: grid;
  grid-gap: .05rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill);

  button {
    background: rgb(5,5,5);
    background: linear-gradient(52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);
    color: rgb(180,180,180);
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      background: rgb(50,50,50);
      background: linear-gradient(52deg, rgba(30,30,30,1) 0%, rgba(33,33,33,1) 73%, rgba(86,86,86,1) 100%);
      color: white;
    }
  }
`;

export default Numpad;
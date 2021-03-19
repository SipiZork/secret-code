import React from 'react';
import styled from 'styled-components';
import TipCode from '../TipCode/TipCode';

const Display = ({
  addNewTip,
  multiplyNumber,
  formData,
  setFromData,
  code1Input,
  code2Input,
  code3Input,
  code4Input,
  code5Input,
  setActiveFirst,
  setTip,
  inputs,
  setInputs,
  access
}) => {
  return (
    <StyledDisplay>
      <TipCode addNewTip={addNewTip} multiplyNumber={multiplyNumber} formData={formData} setFromData={setFromData}
        code1Input={code1Input}
        code2Input={code2Input}
        code3Input={code3Input}
        code4Input={code4Input}
        code5Input={code5Input}
        setActiveFirst={setActiveFirst}
        setTip={setTip}
        inputs={inputs}
        setInputs={setInputs}
      />
      <p className={!access ? 'locked' : 'open'}>{!access ? 'Zárva' : 'Nyitva' }</p>
    </StyledDisplay>
  )
}

const StyledDisplay = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  background: rgb(5,5,5);
  background: linear-gradient(52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);
  p {
    text-transform: uppercase;
    font-family: 'Space Mono', monospace;
    
    animation: pulse 3s infinite;
    &.locked {
      color: rgba(255,0,0,.6);
      text-shadow: 0px 0px 5px rgba(255,0,0,.8);
    }
    &.open {
      color: rgba(0,255,0,.6);
      text-shadow: 0px 0px 5px rgba(0,255,0,.8);
    }

    @keyframes pulse {
      0%, 100% {
        opacity: .3;
      } 50% {
        opacity: 1;
      }
    }
  }
`;

export default Display;

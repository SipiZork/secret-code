import React from 'react';
import styled from 'styled-components';
import Display from '../Display/Display';
import Numpad from '../Numpad/Numpad';

const Board = ({ secretCode, addNewTip, formData, setFromData, multiplyNumber, access, mobile, inputs, setInputs, code1Input, code2Input, code3Input, code4Input, code5Input, time, timerOn, timeOver }) => {

  const setActiveFirst = () => {
    let newInputs = [...inputs];
    newInputs.map((input, i) => {
      if (i === 0) {
        input.active = true;
      } else {
        input.active = false;
      }
      return null;
    });
    setInputs(newInputs);
  }

  const delCharacter = () => {
    const active = inputs.find(input => input.active === true);
    const index = inputs.findIndex(input => input === active);
    if (formData[active.index] !== '') {
      if (!mobile) {
        inputs[index].ref.current.focus();
      }
      setFromData({
        ...formData,
        [active.index]: ''
      });
    } else {
      if (index - 1 >= 0) {
        if(!mobile)
        inputs[index - 1].ref.current.focus();
        setFromData({
          ...formData,
          [active.index]: 0,
          [inputs[index-1].index]: '',
        });
        let newInputs = [...inputs];
        newInputs.map((input, i) => {
          if (i === index - 1) {
            input.active = true;
          } else {
            input.active = false;
          }
          return null;
        });
        setInputs(newInputs);
      }
    }
  }

  const setData = (input) => {
    const active = inputs.find(input => input.active === true);
    const index = inputs.findIndex(input => input === active);
    setFromData({
      ...formData,
      [active.index]: input
    });
    if (index + 1 < 5) {
      if (!mobile) {
        inputs[index + 1].ref.current.focus();
      }
      let newInputs = [...inputs];
      newInputs.map((input, i) => {
        if (i === index + 1) {
          input.active = true;
        } else {
          input.active = false;
        }
        return null;
      });
      setInputs(newInputs);
    }
  }

  const setTip = () => {
    addNewTip([parseInt(formData.code1), parseInt(formData.code2), parseInt(formData.code3), parseInt(formData.code4), parseInt(formData.code5)]);
    setFromData({ code1: 0, code2: 0, code3: 0, code4: 0, code5: 0 });
    if (!mobile) {
      code1Input.current.focus();
    }
    setActiveFirst();
  }
  
  return (

    <CodePanel>
      <Display addNewTip={addNewTip} multiplyNumber={multiplyNumber} access={access} secretCode={secretCode} formData={formData} setFromData={setFromData}
        code1Input={code1Input}
        code2Input={code2Input}
        code3Input={code3Input}
        code4Input={code4Input}
        code5Input={code5Input}
        setActiveFirst={setActiveFirst}
        setTip={setTip}
        inputs={inputs}
        setInputs={setInputs}
        mobile={mobile}
        time={time}
        timerOn={timerOn}
        timeOver={timeOver}
      />
      <Numpad formData={formData} setFromData={setFromData} setData={setData} delCharacter={delCharacter} setTip={setTip} />
    </CodePanel>
  )
}

const CodePanel = styled.div`
  width: 350px;
  height: 100%;
  background: rgb(117,117,117);
  background: linear-gradient(214deg, rgba(117,117,117,1) 0%, rgba(54,54,54,1) 27%, rgba(46,46,46,1) 100%);
  padding: .05rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

export default Board;
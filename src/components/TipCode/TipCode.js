import React, { useEffect } from 'react';
import styled from 'styled-components';

const TipCode = ({ mobile, inputs, setInputs, addNewTip, multiplyNumber, secretCode, formData, setFromData, code1Input, code2Input, code3Input, code4Input, code5Input, setActiveFirst, setTip }) => {

  const onChange = (e) => {
    const index = inputs.findIndex(input => input.index === e.target.name);
    if (e.target.value.length <= 1) {
      setFromData({
        ...formData,
        [e.target.name]: e.target.value
      });
      if (index + 1 < 5) {
        if (e.target.value !== '') {
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
    } else if (e.target.value.length === 2) {
      setFromData({
        ...formData,
        [e.target.name]: e.target.value[1]
      });
      if (index + 1 < 5) {
        if (e.target.value !== '') {
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
    }
  }

  const setOwnCode = (e) => {
    e.preventDefault();
    const { code1, code2, code3, code4, code5 } = formData;
    if (!multiplyNumber) {
      if (code1 !== code2 && code1 !== code3 && code1 !== code4 && code1 !== code5 &&
        code2 !== code3 && code2 !== code4 && code2 !== code5 &&
        code3 !== code4 && code3 !== code5 &&
        code4 !== code5) {
          setTip();
      }
    } else {
      setTip();
    }
  }

  const onKeyDown = (e) => {
    const index = inputs.findIndex(input => input.index === e.target.name);
    /*if (e.keyCode === 39 && !e.shiftKey) {
      if (index + 1 < 5) {
        inputs[index + 1].ref.current.focus();
      }
    }
    if (e.keyCode === 37 && !e.shiftKey) {
      if (index - 1 >= 0) {
        inputs[index - 1].ref.current.focus();
      }
    }*/
    if (formData[e.target.name] === '' && e.keyCode === 8) {
      setFromData({
        ...formData,
        [e.target.name]: 0
      });
      if (!mobile) {
        if (index - 1 >= 0) {
          inputs[index - 1].ref.current.focus();
        }
      }
    }
  }

  const onClick = (e) => {
    let index = inputs.findIndex(input => input.index === e.target.name);
    if (e.target.value !== '') {
      /*inputs[index].ref.current.focus();*/
      let newInputs = [...inputs];
      newInputs.map((input, i) => {
        if (i === index) {
          input.active = true;
        } else {
          input.active = false;
        }
        return null;
      });
      setInputs(newInputs);
    }
  }

  useEffect(() => {
    if (!mobile) {
      code1Input.current.focus();
    }
  }, [])


  return (
    <div>
      <Form onSubmit={setOwnCode}>
        <input ref={code1Input} onClick={onClick} onKeyDown={onKeyDown} type="number" name="code1" maxLength="1" min="0" max="9" value={formData.code1} onChange={onChange}/>
        <input ref={code2Input} onClick={onClick} onKeyDown={onKeyDown} type="number" name="code2" maxLength="1" min="0" max="9" value={formData.code2} onChange={onChange} />
        <input ref={code3Input} onClick={onClick} onKeyDown={onKeyDown} type="number" name="code3" maxLength="1" min="0" max="9" value={formData.code3} onChange={onChange} />
        <input ref={code4Input} onClick={onClick} onKeyDown={onKeyDown} type="number" name="code4" maxLength="1" min="0" max="9" value={formData.code4} onChange={onChange} />
        <input ref={code5Input} onClick={onClick} onKeyDown={onKeyDown} type="number" name="code5" maxLength="1" min="0" max="9" value={formData.code5} onChange={onChange} />
        <button onSubmit={setOwnCode} style={{ display: 'none' }}>Küld</button>
      </Form>
    </div>
  )
}

const Form = styled.form`
  display: flex;
  gap: 0rem;

  input {
    background: transparent;
    color: #76ff00;
    outline: none;
    border: none;
    width: 1.2rem;
    height: 2rem;
    font-size: 2.5rem;
    -webkit-appearance: none;
    text-align: center;
    font-family: 'VT323', monospace;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  input[type=number] {
    -webkit-appearance: textfield;
  }
`;

export default TipCode

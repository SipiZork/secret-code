import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Settings = ({ level, changeLevel, settingsOpen, multiplyNumber, changeMultiplyNumbers, historyPosition, setHistoryPosition, startNewGame, timerOn }) => {

  return (
    <StyledSettings className={settingsOpen ? 'open' : 'close'}>
      <h2>Beállítások</h2>
      <article>
        <div>
          <p>Egyszerű mód</p>
          <input type="checkbox" checked={!multiplyNumber} onChange={() => changeMultiplyNumbers()} />
        </div>
        <div>
          <p>Bal oldali előzmények</p>
          <input type="checkbox" checked={historyPosition} onChange={() => setHistoryPosition(!historyPosition)} />
        </div>
        {!timerOn &&
          <div>
          <p>Nehézségi szint</p>
          <select value={level} onChange={(e) => changeLevel(e.target.value)} >
            <option value="easy">Könnyű</option>
            <option value="normal">Normál</option>
            <option value="medium">Nehéz</option>
            <option value="hard">Impassibru</option>
          </select>
          
          </div>
        }
      </article>
      {!timerOn &&
        <article>
          <Button text="Új játék" onClick={() => startNewGame()} />
        </article>
      }
    </StyledSettings>
  )
}

const StyledSettings = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(20rem);
  transition: transform .35s, opacity .35s;
  box-shadow: -5px 0 40px 2px rgba(255,255,255,.5);
  color: #d7d7d7;
  opacity: 0;
  display: flex;
  color: rgb(180,180,180);
  flex-direction: column;
  gap: .5rem;
  background: rgb(5,5,5);
  z-index: 54;
  background: linear-gradient(52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);
  @media screen and (max-width: 350px) {
    transform: translateX(100vw);
    width: 100vw;
  }

  div {
    display: block;
    margin-bottom: .5rem;
    padding: .35rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input[type="checkbox"] {
      position: relative;
      width: 3rem;
      height: 1rem;
      -webkit-appearance: none;
      background: #c6c6c6;
      outline: none;
      border-radius: 2rem;
      box-shadow: inset 0 0 5px rgba(0,0,0,.8);
      cursor: pointer;
      transition: all .35s;

      @media screen and (max-width: 350px) {
        width: 3.5rem;
        height: 1.5rem;
      }
    }

    input:checked[type="checkbox"] {
      background: #76ff00;
    }

    input[type="checkbox"]:before {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      transform: scale(1.3);
      border-radius: 2rem;
      background: #d7d7d7;
      top: 0;
      left: 0;
      transition: all .35s;
      @media screen and (max-width: 350px) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    input:checked[type="checkbox"]:before {
      box-shadow: 0 0 5px rgba(118,255,0,.6);
      left: 2rem;
    }
  }

  &.open {
    transform: translateX(0);
    opacity: 1;
  }

  h2 {
    height: 3rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    color: white;
  }

  article {
    text-align: center;
    padding: 1.5rem 0 0;
    font-size: 1.2rem;
    @media screen and (max-width: 350px) {
      font-size: 1.7rem;
    }
  }
`;

export default Settings;
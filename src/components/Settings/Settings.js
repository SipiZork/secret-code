import React from 'react';
import styled from 'styled-components';

const Settings = ({ settingsOpen, multiplyNumber, changeMultiplyNumbers, historyPosition, setHistoryPosition }) => {
  return (
    <StyledSettings className={settingsOpen ? 'open' : 'close'}>
      <h2>Beállítások</h2>
      <article>
        <label className="simple-mode">
          Egyszerű mód {` `}
          <input type="checkbox" checked={!multiplyNumber} onChange={() => changeMultiplyNumbers()} />
        </label>
        <label className="simple-mode">
          Bal oldali előzmények {` `}
          <input type="checkbox" checked={historyPosition} onChange={() => setHistoryPosition(!historyPosition)} />
        </label>
      </article>
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
  color: white;
  opacity: 0;
  display: flex;
  color: rgb(180,180,180);
  flex-direction: column;
  gap: .5rem;
  background: rgb(5,5,5);
  background: linear-gradient(52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);

  label {
    display: block;
    margin-bottom: .5rem;
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
    padding: 2rem 0;
    font-size: 1.2rem;
  }
`;

export default Settings;
import React from 'react';
import styled from 'styled-components';

const NewGame = ({tries, startNewGame, access}) => {
  return (
    <StlyedNewGame className={access ? 'show' : ''}>
      <div className="content">
        <h3>Kijutottál</h3>
        <p>{tries} próbálkozásra volt szükséged a sikerhez</p>
        <button onClick={() => startNewGame()}>Új játék</button>
      </div>
    </StlyedNewGame>
  )
}

const StlyedNewGame = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 50;
  background: rgba(0,0,0,.5);
  display: none;
  color: black;
  justify-content: center;
  align-items: center;

  &.show {
    display: flex;
  }

  .content {
    padding: 1rem;
    background: rgb(5,5,5);
    background: linear-gradient(52deg, rgba(50,50,50,1) 0%, rgba(53,53,53,1) 73%, rgba(100,100,100,1) 100%);
    border-radius: 5px;
    box-shadow: 5px 5px 10px 1px rgba(255,255,255,.4);
    width: 400px;
    height: 300px;
    color: white;
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;

    button {
      padding: .5rem;
    }
  }
`;

export default NewGame;
import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const NewGame = ({ tries, startNewGame, access, timeOver, newGameShow, setNewGameShow }) => {
  
  return (
    <StlyedNewGame className={(access || timeOver) && newGameShow ? 'show' : (access || timeOver) && !newGameShow ? 'hide' : ''}>
      <div className="content">
        <div className="close-icon" onClick={() => setNewGameShow(false)}>X</div>
        <h3>{access ? 'Kijutottál' : !access && timeOver ? 'Felrobbantál' : ''}</h3>
        {access && <p>{tries} próbálkozásra volt szükséged a sikerhez</p>}
        <Button text="Új játék" onClick={() => startNewGame()} />
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

  &.hide {
    display: flex;
    background: rgba(0,0,0,0);
    .content {
      display: none;
    }
  }

  .content {
    padding: 1rem;
    background: rgb(5,5,5);
    background: linear-gradient(52deg, rgba(5,5,5,1) 0%, rgba(40,40,40,1) 85%, rgba(80,80,80,1) 100%);
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255,255,255,.4);
    width: 400px;
    height: 300px;
    color: #d7d7d7;
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .close-icon {
      position: absolute;
      right: 1rem;
      top: .5rem;
      cursor: pointer;
      font-size: 2rem;
    }

    @media screen and (max-width: 600px) {
      width: 300px;
    }
    @media screen and (max-width: 350px) {
      width: 90vw;
    }
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }

    button {
      margin-top: 1rem;
    }

  }
`;

export default NewGame;
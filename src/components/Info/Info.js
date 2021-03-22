import React from 'react';
import styled from 'styled-components';

const Info = ({ infoOpen }) => {
  return (
    <StyledInfo className={infoOpen ? 'open' : 'close'}>
      <h2>Info</h2>
      <article>
        <p>A bomba hamarosan robban.</p>
        <p>Az időzítő az első tipp leadásának pillanatában indul el, találd ki a számkódot, mielőtt lejárna az idő, és hatástalanítsd a bombát.</p>
        <p>Egy szám többször is előfordulhat a kódban.</p>
        <p>A hátralévő időt a kódpanel kijelzőjének jobb oldalán láthatod.</p>
        <p>Ha tippeltél, az előzmények lesznek a segítségedre a következő tippedhez.</p>
        <p>Ha a tippben szereplő szám:</p>
        <ul> 
            <li><span className="green">zöld</span> színnel jelenik meg a szám, akkor a szám jó és jó helyen is van</li>
            <li><span className="yellow">sárga</span> színnel jelenik meg a szám, akkor a szám jó, de rossz helyen van</li>
            <li><span className="red">vörös</span> színnel jelenik meg a szám, akkor a szám egyáltalán nem szerep a kódban</li>
        </ul>
        <h3>Nehézségi szint</h3>
        <p>A nehézségi szint határozza meg a hatástalnításra rendelkezésre álló időt.</p>
        <p>Két játék között van lehetőséged állítani a szintet</p>
        <ul>
          <li>Könnyű: 60mp</li>
          <li>Normál: 45mp</li>
          <li>Nehéz: 30mp</li>
          <li>Impassibru: 20mp</li>
        </ul>
        <h3>Egyszerű mód</h3>
        <p>Egyszerű módban minden szám csak egyszer szerepelhet a kódban</p>
      </article>
    </StyledInfo>
  )
}

const StyledInfo = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition: transform .35s, opacity .35s;
  box-shadow: -5px 0 40px 2px rgba(255,255,255,.5);
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  z-index: 54;
  gap: .5rem;
  background: rgb(5,5,5);
  color: rgb(180,180,180);
  background: linear-gradient(-52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: .25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(150,150,150);
  }

  @media screen and (max-width: 350px) {
    width: 100vw;
  }

  label {
    display: block;
  }

  &.open {
    transform: translateX(0);
    opacity: 1;
  }

  h2 {
    height: 3rem;
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
  }

 h3 {
    color: white;
    text-decoration: underline;
    margin: 1rem 0 .5rem 0;
  }

  article {
    padding: 2rem 0;
    font-size: 1.2rem;
    
    p{
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      li {
        padding: .5rem 1.5rem;
        &:before {
          content: '●';
          font-size: 1.5rem;
          width: 1.5rem; /* Also needed for space (tweak if needed) */
          display: inline-block; /* Needed to add space between the bullet and the text */
          margin-left: -1.5rem;
        }
        &:nth-child(1) {
          &:before {
            color: #76ff00;
          }
        }
        &:nth-child(2) {
          &:before {
            color: yellow;
          }
        }
        &:nth-child(3) {
          &:before {
            color: red;
          }
        }
        &:nth-child(4) {
          &:before {
            color: rgb(70,70,70);
          }
        }
        span {
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
      }
    }
  }
`;

export default Info;
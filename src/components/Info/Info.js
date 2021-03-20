import React from 'react';
import styled from 'styled-components';

const Info = ({ infoOpen }) => {
  return (
    <StyledInfo className={infoOpen ? 'open' : 'close'}>
      <h2>Info</h2>
      <article>
        <p>A kód nélkül nem tudsz kijutni a szobából.</p>
        <p>Találd ki a kódot, minél gyorsabban.</p>
        <p>Egy szám többször is előfordulhat a kódban.</p>
        <p>Ha tippeltél, az előzmények lesznek a segítségedre a következő tippedhez.</p>
        <p>Ha a tippben szereplő szám:</p>
        <ul> 
            <li><span class="green">zöld</span> színnel jelenik meg a szám, akkor a szám jó és jó helyen is van</li>
            <li><span class="yellow">sárga</span> színnel jelenik meg a szám, akkor a szám jó, de rossz helyen van</li>
            <li><span class="red">vörös</span> színnel jelenik meg a szám, akkor a szám egyáltalán nem szerep a kódban</li>
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
  z-index: 5;
  gap: .5rem;
  background: rgb(5,5,5);
  color: rgb(180,180,180);
  background: linear-gradient(-52deg, rgba(5,5,5,1) 0%, rgba(8,8,8,1) 73%, rgba(56,56,56,1) 100%);

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
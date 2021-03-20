import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Settings from './components/Settings/Settings';
import Info from './components/Info/Info';
import GlobalStyle from './components/GlobalyStyle';
import Board from './components/Board/Board';
import FullHistory from './components/History/FullHistory';
import NewGame from './components/NewGame/NewGame';
import accessDeniedSound from './assets/sounds/access_denied.mp3';
import accessGrantedSound from './assets/sounds/access_grandted.mp3';

const App = () => {

  const [secretCode, setSecretCode] = useState([]);
  const [codeHistory, setCodeHistory] = useState([]);
  const [multiplyNumber, setMultiplyNumber] = useState(true);
  const [historyPosition, setHistoryPosition] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [access, setAccess] = useState(false);

  const accessDenied = new Audio(accessDeniedSound);
  const accessGranted = new Audio(accessGrantedSound);

  const generateCode = (multi = multiplyNumber) => {
    let newSecretCode = [];
    const existsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * existsNumbers.length);
      newSecretCode.push(existsNumbers[random]);
      if (!multi) {
        existsNumbers.splice(random, 1);
      }
    }
    //setSecretCode([3,6,9,5,0]);
    setSecretCode(newSecretCode);
  }

  const addNewTip = (tippedNumbers) => {
    let newTips = [];
    let indexes = [];
    let counter = 0;
    let secretCodeArray = [...secretCode];
    tippedNumbers.map((number, i) => {
      let goodPlace = false;
      let examined = false;
      let goodNumber = false;
      if (number === secretCodeArray[i]) {
        counter++;
        goodPlace = true;
        examined = true;
        goodNumber = true;
      }
      newTips.push({
        number: number,
        examined,
        goodNumber,
        goodPlace,
      });
    });
    tippedNumbers.map((number, i) => {
      if (!newTips[i].examined) {
        let searchNext = true;
        secretCodeArray.map((secretNumber, n) => {
          if (secretNumber === number && n !== i && !newTips[n].examined && !indexes.includes(n) && searchNext) {
            indexes.push(n);
            searchNext = false;
            newTips[i].goodNumber = true;
          } 
        });
      }
      if (counter === 5) {
        setAccess(true);
        accessGranted.play();
      } else {
        accessDenied.play();
      }
    });
    setCodeHistory([newTips, ...codeHistory]);
  }

  const startNewGame = () => {
    generateCode();
    setCodeHistory([]);
    setAccess(false);
  }

  useEffect(() => {
    //console.log(secretCode);
  }, [secretCode])

  useEffect(() => {
    generateCode();
  }, []);

  const changeMultiplyNumbers = () => {
    setMultiplyNumber(!multiplyNumber);
    generateCode(!multiplyNumber);
    setCodeHistory([]);
  }

  return (
    <Body>
      <GlobalStyle />
      <NewGame startNewGame={startNewGame} access={access} tries={codeHistory.length} />
      <div className={`info ${ infoOpen ? 'open' : 'close'} ${settingsOpen ? ' hide' : ''}`} onClick={() => setInfoOpen(!infoOpen)} >
        <FontAwesomeIcon icon={faInfoCircle}/>
      </div>
      <Info infoOpen={infoOpen} />
      <div className={`settings ${ settingsOpen ? 'open' : 'close'} ${infoOpen ? ' hide' : ''}`} onClick={() => setSettingsOpen(!settingsOpen)} >
        <FontAwesomeIcon icon={faCog}/>
      </div>
      <Settings settingsOpen={settingsOpen} multiplyNumber={multiplyNumber} changeMultiplyNumbers={changeMultiplyNumbers} historyPosition={historyPosition} setHistoryPosition={setHistoryPosition} startNewGame={startNewGame} />
      <Table className={historyPosition ? 'left' : 'right'}>
        <Board secretCode={secretCode} codeHistory={codeHistory} addNewTip={addNewTip} multiplyNumber={multiplyNumber} access={access} />
        <FullHistory codeHistory={codeHistory} />
      </Table>
    </Body>
  );
}

export default App;

const Table = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  align-items: center;
  border-radius: .5em;
  background-image: -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%, .1) 7.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   4%, hsla(0,0%,  0%,.03) 4.5%),
    -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%),
    
    linear-gradient(180deg, hsl(0,0%,78%)  0%, 
    hsl(0,0%,90%) 47%, 
    hsl(0,0%,78%) 53%,
    hsl(0,0%,70%)100%);
  
  &.left {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 80vh;
    &.left {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 350px) {
    width: 100vh;
  }
`;

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(28,28,28);
  background: radial-gradient(circle, rgba(28,28,28,1) 0%, rgba(0,0,0,1) 100%);

  .settings, .info {
    position: fixed;
    right: 1rem;
    top: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 10;
    transition: color .35s;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
   
    @media screen and (max-width: 350px) { 
      &.hide {
        display: none;
      }
    }

    &.open {
      color: #76ff00;
    }
  }

  .info {
    left: 1rem;
  }
`;
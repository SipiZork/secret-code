import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';
import Settings from './components/Settings/Settings';
import Info from './components/Info/Info';
import GlobalStyle from './components/GlobalyStyle';
import Board from './components/Board/Board';
import FullHistory from './components/History/FullHistory';
import NewGame from './components/NewGame/NewGame';
import accessDeniedSound from './assets/sounds/access_denied.mp3';
import accessGrantedSound from './assets/sounds/access_grandted.mp3';
import boomSound from './assets/sounds/boom.mp3';

const App = () => {

  const [secretCode, setSecretCode] = useState([]);
  const [codeHistory, setCodeHistory] = useState([]);
  const [multiplyNumber, setMultiplyNumber] = useState(true);
  const [historyPosition, setHistoryPosition] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [access, setAccess] = useState(false);
  const [mobile] = useState(isMobile);
  const [startTime, setStartTime] = useState(45);
  const [time, setTime] = useState(45);
  const [timerOn, setTimerOn] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [level, setLevel] = useState('normal');
  const [newGameShow, setNewGameShow] = useState(true);
  let intervalId;

  const accessDenied = new Audio(accessDeniedSound);
  const accessGranted = new Audio(accessGrantedSound);
  const boom = new Audio(boomSound);
  
  const [formData, setFromData] = useState({
    code1: 0,
    code2: 0,
    code3: 0,
    code4: 0,
    code5: 0
  });
  
  const code1Input = useRef(null);
  const code2Input = useRef(null);
  const code3Input = useRef(null);
  const code4Input = useRef(null);
  const code5Input = useRef(null);
  const timeRef = useRef(time);

  const [inputs, setInputs] = useState([
    {
      active: true,
      index: 'code1',
      ref: code1Input
    }, {
      active: false,
      index: 'code2',
      ref: code2Input
    }, {
      active: false,
      index: 'code3',
      ref: code3Input
    }, {
      active: false,
      index: 'code4',
      ref: code4Input
    }, {
      active: false,
      index: 'code5',
      ref: code5Input
    }
  ]);

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
    setSecretCode([1,1,1,1,1]);
    setSecretCode(newSecretCode);
  }

  const addNewTip = (tippedNumbers) => {
    if (codeHistory.length === 0) {
      intervalId = setInterval(() => {
        if (timeRef.current < 2) {
          clearInterval(intervalId);
        }
        timeRef.current = timeRef.current - 1;
        setTime(state => state - 1);
      }, 1000);
      setTimerOn(true);
    }
    if (!access) {
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
        return null;
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
            return null;
          });
        }
        if (counter === 5) {
          setAccess(true);
          accessGranted.play();
          setTimerOn(false);
          setNewGameShow(true);
          var highestTimeoutId = setTimeout(";");
          for (var y = 0 ; y < highestTimeoutId ; y++) {
                clearTimeout(y); 
          }
        } else {
          accessDenied.play();
        }
        return null;
      });
      setCodeHistory([newTips, ...codeHistory]);
    }
  }

  const startNewGame = () => {
    generateCode();
    setCodeHistory([]);
    setAccess(false);
    setSettingsOpen(false);
    setTimeOver(false);
    setTime(startTime);
    setTimerOn(false);
    setNewGameShow(true);
    timeRef.current = startTime;
    if (!mobile) {
      inputs[0].ref.current.focus();
    }
    setFromData({
      code1: 0,
      code2: 0,
      code3: 0,
      code4: 0,
      code5: 0,
    })
  }

  useEffect(() => {
    //console.log(secretCode);
  }, [secretCode])

  useEffect(() => {
    if (access || timeOver) {
      code1Input.current.blur();
      code2Input.current.blur();
      code3Input.current.blur();
      code4Input.current.blur();
      code5Input.current.blur();
    }
  }, [access, timeOver])

  useEffect(() => {
    generateCode();
  }, []);

  useEffect(() => {
    if (time <= 0 && !timeOver && timerOn) {
      setTimeOver(true);
      if (!access) {
        boom.play();
      }
      setTimerOn(false);
    }
  }, [time]);

  const changeMultiplyNumbers = () => {
    setMultiplyNumber(!multiplyNumber);
    generateCode(!multiplyNumber);
    setCodeHistory([]);
  }

  const changeLevel = (selectedLevel) => {
    setLevel(selectedLevel);
    if (selectedLevel === 'easy') {
      setStartTime(60);
      setTime(60);
    } else if (selectedLevel === 'normal') {
      setStartTime(45);
      setTime(45);
    } else if (selectedLevel === 'medium') {
      setStartTime(30);
      setTime(30);
    } else if (selectedLevel === 'hard') {
      setStartTime(20);
      setTime(20);
    }
  }

  return (
    <Body>
      <GlobalStyle />
      <NewGame newGameShow={newGameShow} setNewGameShow={setNewGameShow} startNewGame={startNewGame} access={access} timeOver={timeOver} tries={codeHistory.length} />
      <div className={`info ${ infoOpen ? 'open' : 'close'} ${settingsOpen ? ' hide' : ''}`} onClick={() => setInfoOpen(!infoOpen)} >
        <FontAwesomeIcon icon={faInfoCircle}/>
      </div>
      <Info infoOpen={infoOpen} />
      <div className={`settings ${ settingsOpen ? 'open' : 'close'} ${infoOpen ? ' hide' : ''}`} onClick={() => setSettingsOpen(!settingsOpen)} >
        <FontAwesomeIcon icon={faCog}/>
      </div>
      <Settings level={level} changeLevel={changeLevel} settingsOpen={settingsOpen} multiplyNumber={multiplyNumber} changeMultiplyNumbers={changeMultiplyNumbers} historyPosition={historyPosition} setHistoryPosition={setHistoryPosition} startNewGame={startNewGame} setSettingsOpen={setSettingsOpen} timerOn={timerOn} />
      <Table className={historyPosition ? 'left' : 'right'}>
        <Board
          secretCode={secretCode}
          codeHistory={codeHistory}
          addNewTip={addNewTip}
          multiplyNumber={multiplyNumber}
          access={access}
          mobile={mobile}
          inputs={inputs}
          setInputs={setInputs}
          code1Input={code1Input}
          code2Input={code2Input}
          code3Input={code3Input}
          code4Input={code4Input}
          code5Input={code5Input}
          time={time}
          timeOver={timeOver}
          timerOn={timerOn}
          formData={formData}
          setFromData={setFromData}
        />
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
    z-index: 55;
    transition: color .35s;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d7d7d7;
   
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
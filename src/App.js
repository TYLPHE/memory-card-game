import { useState, useEffect } from 'react';
import luffyPng from './images/luffy.png';
import zoroPng from './images/zoro.png';
import namiPng from './images/nami.png';
import usoppPng from './images/usopp.png';
import sanjiPng from './images/sanji.png';
import chopperPng from './images/chopper.png';
import robinPng from './images/robin.png';
import frankyPng from './images/franky.png';
import brookPng from './images/brook.png';
import './App.css';

function App() {
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const crewArr = [
    {
      png: luffyPng,
      alt: 'Luffy wanted poster',
      pos: 0,
    },
    {
      png: zoroPng,
      alt: 'Zoro wanted poster',
      pos: 1,
    },
    {
      png: namiPng,
      alt: 'Nami wanted poster',
      pos: 2,
    },
    {
      png: usoppPng,
      alt: 'Usopp wanted poster',
      pos: 3,
    },
    {
      png: sanjiPng,
      alt: 'Sanji wanted poster',
      pos: 4,
    },
    {
      png: chopperPng,
      alt: 'Chopper wanted poster',
      pos: 5,
    },
    {
      png: robinPng,
      alt: 'Robin wanted poster',
      pos: 6,
    },
    {
      png: frankyPng,
      alt: 'Franky wanted poster',
      pos: 7,
    },
    {
      png: brookPng,
      alt: 'Brook wanted poster',
      pos: 8,
    },
  ];

  // return array with randomized positions
  function randomizer() {
    const randArr = [];
    while (randArr.length < 9) {
      let num = Math.floor(Math.random()*9);
      const dupe = randArr.filter(number => number === num)
      if(dupe.length === 0) {
        randArr.push(num)
      }
    }
    return randArr
  }

  async function scoreLogic(e) {
    const match = selected.filter(match => match === e.target.src);
    if (match.length === 0) {
      setSelected(state => [...state, e.target.src]);
    } else setSelected([]);
  }
  
  function Intro() {
    return (
      <div className='sidebar left'>
        <div>
          <div>Memory Card Game</div>
          <div>by TYLPHE</div>
        </div>
        <div className='desc'>
          Welcome to Memory Card Game! Click on each card once for a maximum score of 9
        </div>
      </div>
    )
  }

  function Grid({ crewArr }) {
    const arr = [];
    const random = randomizer();
    for (let i = 0; i < crewArr.length; i += 1) {
      for (let j = 0; j < random.length; j += 1) {
        if (crewArr[i].pos === random[j]) {
          arr.push(
            <div className='img-container' key={`img${j}`}>
              <img 
                src={crewArr[j].png}
                alt={crewArr[j].alt}
                onClick={(e) => scoreLogic(e)}
                draggable={false}
              />
            </div>
          )
        }
      }
    }

    const top = [arr[0], arr[1], arr[2]];
    const mid = [arr[3], arr[4], arr[5]];
    const bot = [arr[6], arr[7], arr[8]];
    return (
      <>
        <div className='flex-row'>{top}</div>
        <div className='flex-row'>{mid}</div>
        <div className='flex-row'>{bot}</div>
      </>
    );
  }

  function Score() {
    useEffect(() => {
      setScore(selected.length);
    })
    return (
      <div className='sidebar'>
        <div>Score:</div>
        <div className='score'>
          {score}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='flex-container'>
        <Intro />
        <Grid crewArr={crewArr}/>
        <Score />
      </div>
    </div>
  );
}

export default App;

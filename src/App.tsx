import React, { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';
import './App.css';

const words = [
  'faen', 'helvete', 'satan', 'balle', 'shit', 'fuck', 'mierda', 'coño', 'merde', 'kisama', 'malaka', 'jävlar', 'fan', 'kut',
  'perkele', 'joder', 'grrr', 'å sava', 'gvd', 'blyat'
]

function Shit() {
  const getRandomWord = useCallback(() => words[Math.floor(Math.random() * words.length)], []);

  const [word, setWord] = useState(getRandomWord());

  useEffect(() => {
    const interval = setInterval(() => setWord(getRandomWord()), 250);

    return () => clearInterval(interval);
  }, [getRandomWord]);

  return <span>{word}</span>
}

const sounds = ['es', 'de', 'gr', 'jp', 'pt', 'th',
'f1',
'f2',
'f3',
'f4',
'f5',
'f6',
'f7',
'f8',
'f9',
'f10',
'f11',
'f12',
'f13',
'f14',
'a1',
'a2',
'a3',
'a4',
'a5',
'a6',
'a7',
'a8',
'a9'
];

function App() {
  const getRandomSound = useCallback(() => sounds[Math.floor(Math.random() * sounds.length)], []);

  const [sound, setSound] = useState(getRandomSound());
  const [overlay, setOverlay] = useState(false);

  const [playSound, {duration}] = useSound(`sounds/${sound}.m4a`);

  const play = () => {
    playSound({forceSoundEnabled: true});
    setSound(getRandomSound());
    setOverlay(true);
    setTimeout(() => setOverlay(false), duration ?? 0)
  };

  if (overlay) return <div className='super-shit'>
    <Shit />
    </div>

  return (
    <main>
      <h1>
        et<br/>plutselig<br/>behov<br/>for<br/>kraftord<span className="dot">.</span>
      </h1>

      <audio hidden>

      </audio>

      <button onClick={play}>
        <Shit />
      </button> 

      <footer>partigøyene satanklubb productions</footer>
    </main>
  );
}

export default App;

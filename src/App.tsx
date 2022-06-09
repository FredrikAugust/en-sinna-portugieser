import React, { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';
import './App.css';

const words = ['faen', 'helvete', 'satan', 'balle', 'shit', 'fuck', 'mierda', 'coño', 'merde', 'kisama', 'malaka', 'jävlar', 'fan', 'kut']

function Shit() {
  const getRandomWord = useCallback(() => words[Math.floor(Math.random() * words.length)], []);

  const [word, setWord] = useState(getRandomWord());

  useEffect(() => {
    const interval = setInterval(() => setWord(getRandomWord()), 250);

    return () => clearInterval(interval);
  }, [getRandomWord]);

  return <span>{word}</span>
}

const sounds = ['es', 'de', 'gr', 'jp', 'pt', 'th'];

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

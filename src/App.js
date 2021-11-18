import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { StartGameAction, TryAction } from './redux/ahorcadoReducer';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const {
    wrongLetters,
    matcheds,
    createdAt,
    totalAttemps,
    attempsMade,
    gameFinished,
    success,
    totalWords,
    userId
} = useSelector( store => store.ahorcado );

  const onClick = () => {
    dispatch(StartGameAction());
  }

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const onTry = () => {
    dispatch(TryAction(text))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClick}>Start game</button>
        <input value={text} onChange={handleChangeText}/>
        <button onClick={onTry}>try</button>
        <h3>totalWords: {totalWords}</h3>
        <div>
          <h3>Matcheds</h3>
          <div style={{display: 'flex'}}>
            {matcheds.map(m => <p style={{color: 'green', margin: '3px'}}>{m || '_'}</p>)}
          </div>
        </div>
        <div>
          <h3>Wrong characters</h3>
          {wrongLetters.map(w => <p style={{color: 'red'}}>{w}</p>)}
        </div>
      </header>
    </div>
  );
}

export default App;

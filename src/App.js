import Axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState(0);
  const [vraag, setVraag] = useState('');
  const [antwoord, setAntwoord] = useState('');
  const [correct, setCorrect] = useState('');

  const addQuestions = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/insert', { 
     
      speurtochtId: id,
      vragenForm: vraag,
      antwoorden: antwoord,
      correcteAntwoord: correct
    })
  };

  return (
    <div className="App">
      <h1>Speurtocht</h1>

      <form action="">
        <label>Id</label>
        <input
          type="number"
          id="speurtochtId"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label>Vraag</label>
        <input
          type="text"
          id="vragenForm"
          onChange={(e) => {
            setVraag(e.target.value);
          }}
        />
        <label>Antwoord</label>
        <input
          type="text"
          id="antwoorden"
          onChange={(e) => {
            setAntwoord(e.target.value);
          }}
        />
        <label>Correct antwoord</label>
        <input
          type="text"
          id="correcteAntwoord"
          onChange={(e) => {
            setCorrect(e.target.value);
          }}
        />
        <button onClick={addQuestions}>Submit</button>
      </form>
    </div>
  );
}

export default App;

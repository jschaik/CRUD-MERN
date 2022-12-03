import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [vraag, setVraag] = useState('');
  const [antwoord, setAntwoord] = useState('');
  const [correct, setCorrect] = useState('');

  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setQuestionList(response.data);
    });
  }, []);

  const addQuestions = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/insert', {
      vragenForm: vraag,
      antwoorden: antwoord,
      correcteAntwoord: correct,
    });
  };

  return (
    <div className="App">
      <h1 className="title">Speurtocht</h1>

      <form action="">
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
        <h2 className="title"> Vragen overzicht </h2>
        {questionList.map((val, key) => {
          return (
            <div>
              <h3>{val.vragenForm}</h3>
              <p>{val.antwoorden}</p>
              <p>{val.correcteAntwoord}</p>
              <br />
             
            </div> 
          );
        })}
      </form>
    </div>
  );
}

export default App;

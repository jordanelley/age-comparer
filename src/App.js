import rock from './rock.png'
import './App.css';
import {useState} from "react";

function App() {

    const [age, setAge] = useState(0)
    const [isClicked, setClicked] = useState(false)
    const clicked = (event) => {
        setClicked(true);

    }

    const handleChange = (event) => {
        const age = event.target.value;
        setAge(Number(age));
        setClicked(false);
    };

    return (
    <div className="App">
      <header className="App-header">
          <button> Login </button> <button> Sign Up</button>
        <img src={rock} className="App-logo" alt="logo" />
        <h1>
            Are you older that Dwayne Johnson
        </h1>
          <div>
              <label>
                  your age:
                  <input type="text" onChange={handleChange} />
              </label>
              <input type="submit" value="Submit" onClick={clicked}/>
              <div className="result">
                  <h1>
              {isClicked? (age<50? "no": "yes"):""}</h1></div>
          </div>
      </header>
    </div>
  );
}

export default App;

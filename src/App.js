import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Kezdolap from './components/Kezdolap';
import Urlap from './components/Urlap';

function App() {
  return (
    <div className="container">
    <header>
        <h1>Kizöldítjük a Földet!</h1>
    </header>
    <article>
        <div id="urlap">
            <Urlap  />
        </div>
        <div id="publikus">
            {<Kezdolap />}
        </div>
    </article>
</div>
  );
}

export default App;

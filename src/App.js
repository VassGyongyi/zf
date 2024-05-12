
import './App.css';

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

import matrix from './matrix.png';
import button from './button.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={matrix} className="image" alt="matrix" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={button} alt="button" />        
        </a>
      </header>
    </div>
  );
}

export default App;

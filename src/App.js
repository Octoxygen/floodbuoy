import logo from './components/resources/sidebar-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-logo-2'>
          Hello!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="Button-download">DOWNLOAD APP</button>
        
      </header>
    </div>
  );
}

export default App;

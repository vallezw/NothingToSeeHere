import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Typical
        steps={['Nothing to see here']}
        wrapper="p"
      />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Typing from 'react-typing-animation';
import Typical from 'react-typical'

import Cursor from './Cursor'

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

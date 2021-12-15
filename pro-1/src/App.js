import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Main';

function App() {
  return (
    <div className='App'>
      <Navbar logo={logo} />
      <div className='main'>
        <Header className='main' />
      </div>
    </div>
  );
}

export default App;

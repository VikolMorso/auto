import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Main store={props.store}/>
    </div>
  );
}

export default App;

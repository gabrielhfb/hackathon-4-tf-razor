import { Fragment } from 'react';
import './App.css';
import Geral from './Components/Geral';
import "./css/style.css"
import Script from "./js/main.js"

function App() {
  return (
    <Fragment>
      <Geral/>
      <script type='text/javascript' src={Script}/>
    </Fragment>
  );
}

export default App;

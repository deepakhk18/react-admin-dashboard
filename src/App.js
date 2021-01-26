import React from "react"
import LoginView from "./components/LoginView";
import { Router, Link } from "@reach/router"
//import './App.css';
let Client = () => <div>Dash</div>
function App() {
  return (
    <div className="App">
      {/*<LoginView />*/}
      <Router>
        <LoginView path='/' />
        <Client path='/client'/>
      </Router>
    </div>
  );
}

export default App;

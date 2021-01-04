import logo from './logo.svg';
import './App.css';
import React from 'react'
// import axios from './AxiosConfig/axios'
import Login from './Views/Login'
import Home from './Views/Home'
import Register from './Views/Register'
import Add from './Views/Add'
import Edit from './Views/Edit'

function App() {
  let [page, setPage] = React.useState('login')
  // console.log(page)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        page === 'login' && <Login/>
      }
      {
        page === 'register' && <Register />
      }
      {
        page === 'home' && <Home />
      }
      {
        page === 'add' && <Add />
      }
      {
        page === 'edit' && <Edit />
      }
    </div>
  );
}



export default App;

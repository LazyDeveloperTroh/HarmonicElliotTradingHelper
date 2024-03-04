import {useEffect, useState} from "react";
import axios from "axios";
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Contents from './components/Contents/Contents.js';
import Box from '@mui/material/Box';
import "./App.css";

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/test')
        .then((res) => {
          setHello(res.data);
        })
  }, []);

  return (
      <div className="App">
          <Header></Header>
          <div className="container">
              <Sidebar></Sidebar>
              <Contents></Contents>
          </div>
      </div>
  )
}

export default App;
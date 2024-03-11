import {useEffect, useState} from "react";
import axios from "axios";
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Contents from './components/Contents/Contents.js';
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlanList from "./components/Contents/plan/PlanList";

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/test')
        .then((res) => {
          setHello(res.data);
        })
  }, []);

  return (
      <BrowserRouter>
          <div className="App">
              <Header></Header>
              <div className="container">
                  <Sidebar></Sidebar>
                  <Routes>
                      <Route path="/" element={<Contents/>} />
                      <Route path="/plans" element={<PlanList/>} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>

  )
}

export default App;
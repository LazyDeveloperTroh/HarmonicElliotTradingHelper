import {useEffect, useState} from "react";
import axios from "axios";
import Header from './components/Header/Header.js';
import Navigator from './components/Navigator/Navigator.js';
import Contents from './components/Contents/Contents.js';

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/test')
        .then((res) => {
          setHello(res.data);
        })
  }, []);

  return (
      <div className="App" style={{backgroundColor: '#f3f4f9'}}>
          <Header></Header>
          <div style={{display: "flex", justifyContent: "flex-start"}}>
              <Navigator></Navigator>
              <Contents></Contents>
          </div>
      </div>
  )
}

export default App;
import * as React from "react";
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Contents from './components/Contents/Contents.js';
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlanList from "./components/Contents/plan/PlanList";
import Plan from "./components/Contents/plan/Plan";
import {Grid} from "@mui/material";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Grid container height={"100%"}>
                  <Grid item container columns={14} height={"8%"}>
                      <Header></Header>
                  </Grid>
                  <Grid item container height={"92%"} columns={14} spacing={1}>
                      <Grid item md={2}>
                          <Sidebar></Sidebar>
                      </Grid>
                      <Grid item md={12} style={{backgroundColor: "#eef2f6"}}>
                          <Routes>
                              <Route path="/" element={<Contents/>} />
                              <Route path="/plans" element={<PlanList/>} />
                              <Route path="/plans/add" element={<Plan/>} />
                          </Routes>
                      </Grid>
                  </Grid>
              </Grid>
          </div>
      </BrowserRouter>

  )
}

export default App;
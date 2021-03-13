import React from 'react';
import styled from "styled-components";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>

              </Route>
            </Switch>
          </AppBody>

        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`

`

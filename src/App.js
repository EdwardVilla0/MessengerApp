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
import Chat from './components/Chat/Chat.component';

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
                <Chat />
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
display: flex;
height: 100vh; 
`

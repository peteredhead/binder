import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CardContextProvider from './contexts/CardContext';
import TableContextProvider from './contexts/TableContext';
import CardContainer from './containers/CardContainer';
import TableContainer from './containers/TableContainer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/card/:id">
            <CardContextProvider>
              <CardContainer />
            </CardContextProvider>
          </Route>
          <Route path="/:page?">
            <TableContextProvider>
              <TableContainer />
            </TableContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

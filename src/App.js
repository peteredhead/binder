import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CardContextProvider from './contexts/CardContext';
import TableContextProvider from './contexts/TableContext';
import Card from './containers/Card';
import Table from './containers/Table';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/card/:id">
            <CardContextProvider>
              <Card />
            </CardContextProvider>
          </Route>
          <Route path="/:page?">
            <TableContextProvider>
              <Table />
            </TableContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

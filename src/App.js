import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddData from './components/addData';
import ListData from './components/listData';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/add" component={AddData} />
        <Route path="/users" component={ListData} />
        <Redirect from='*' to='/add' />
      </div>
    </Router>
  );
}

export default App;

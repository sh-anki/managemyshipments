import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ShipmentDetails from './components/ShipmentDetails';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/:id" component={ShipmentDetails} />
    </div>
  );
}

export default App;

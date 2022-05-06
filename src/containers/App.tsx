import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MasterLayout1 } from '../components/layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import UserDetailsPage from './UserPage/UserDetailsPage';


class App extends Component {

  render( ) {

    let routes = (
      <Routes>
        <Route path = "/*" element = { <HomePage/> }/>
        <Route path = "/user" element = { <UserDetailsPage/> }/>
      </Routes>
    );

    return (
      <MasterLayout1>
          { routes }
      </MasterLayout1>
    );
  }
}

export default App;
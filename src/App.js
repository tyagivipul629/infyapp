import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
// import Hotels from './components/Hotels';
import BookRoom from './components/BookRoom';
import Bookings from './components/Bookings';
// import Reschedule from './components/Reschedule';
// import ReviewPage from './components/ReviewPage/index';
import Card from './components/HotelList/Card';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path="*" component={ Navbar } /> */ }
        <Route exact path="/" component={ Register } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/hotels" component={ Card } />
        <Route exact path="/bookRoom/:hotel" render={ (props) => <BookRoom { ...props } /> } />
        <Route exact path="/bookings" component={ Bookings } />
        {/* <Route exact path="/reschedule/:bookid" render={ (props) => <Reschedule { ...props } /> } />
        <Route exact path="/review/:hotel" component={ ReviewPage } /> */}
      </Switch>
    );
  }
}

export default App;

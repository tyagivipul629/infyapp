import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Hotels from './components/Hotels';
import BookRoom from './components/BookRoom';
import Bookings from './components/Bookings';
import Reschedule from './components/Reschedule';
import AddReview from './components/AddReview';
import ViewReview from './components/ViewReview';
import NavBar from './components/Navbar';
import './sass/App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedin: false,
      user: ''
    }
    localStorage.setItem('user','vipul');
  }
  componentDidMount(){
    //we will extract the username of the logged in user here, from localStorage, and if it is found, 
    //we update isLoggedin to true and set user to the name of loggedin user
    const user=localStorage.getItem('user');
    console.log(user);
    if(user!==null)
      this.setState({
        isLoggedin: true,
        user: user
      })
  }

  logoutUser=()=>{
    this.setState({
      isLoggedin: false,
      user: ''
    })
  }
  render(){
    return(
      <>
      <NavBar isLoggedin={this.state.isLoggedin} user={this.state.user} logoutUser={this.logoutUser} />

      <Switch>
        <Route exact path="/" render={()=><Login isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/register" render={()=><Register isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/login" render={()=><Login isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/home" render={()=><Home isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/hotels" render={()=><Hotels isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/bookRoom/:hotel" render={(props)=><BookRoom {...props} isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/bookings" render={()=><Bookings isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/reschedule/:bookid" render={(props)=><Reschedule {...props} isLoggedin={this.state.isLoggedin} user={this.state.user} />} />} />

        <Route exact path="/addReview/:hotel" render={(props)=><AddReview {...props} isLoggedin={this.state.isLoggedin} user={this.state.user} />} />

        <Route exact path="/viewReview/:hotel" render={(props)=><ViewReview {...props} isLoggedin={this.state.isLoggedin} user={this.state.user} />} />
      </Switch></>
      
    );
  }
}

export default App;
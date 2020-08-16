import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Pages/homepage/Homepage";
import ShopPage from './Pages/shop/Shop'
import Header from './Components/header/Header'
import SignInAndSignUp from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up'
import {auth} from './firebase/firebase.util';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      currentUser: null
    }
  }

  unsubscribefromAuth = null

  componentDidMount(){

    this.unsubscribefromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  render(){
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />

      </Switch>
    </div>
  );
}
}

export default App;

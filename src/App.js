import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Pages/homepage/Homepage";
import ShopPage from './Pages/shop/Shop'
import Header from './Components/header/Header'
import Signinandsignup from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up'
// import SignIn from './Components/sign-in/Sign-in'
// import SignUp from './Components/sign-up/Sign-up'
import {auth, createUserProfileDocument} from './firebase/firebase.util';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({user: userAuth})
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header  currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Signinandsignup} />
        {/* <Route path="/signup" component={SignUp} /> */}

      </Switch>
    </div>
  );
}
}

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

import "./App.css";

import Homepage from "./Pages/homepage/Homepage";
import ShopPage from './Pages/shop/Shop'
import Header from './Components/header/Header'
import Signinandsignup from './Pages/Sign-in-and-sign-up/Sign-in-and-sign-up'
// import SignIn from './Components/sign-in/Sign-in'
// import SignUp from './Components/sign-up/Sign-up'
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
      }

      setCurrentUser( userAuth )
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route  
        exact 
        path="/signin" 
        render={() =>
          this.props.currentUser ? (
          <Redirect to='/' />
          ) : (
            <Signinandsignup />
        )
        }
        />

      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
 
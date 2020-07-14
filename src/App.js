import React from 'react';
import './components/FontawesomeIcons';
import './App.css';
import classes from './App.module.css';
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import ToDos from "./containers/ToDos";
import Error from "./containers/Error"


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          {/* anh Triết viết thiếu exact nha. Thêm exact để nó link page chính xác */}
          
          {/* <Route path="/signup"> 
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/todos">
            <ToDos/>
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route> */}



          {/* Phần Trung edit */}
          <Route exact path="/signup" component={SignUp} /> 
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/todos" component={ToDos}/>
          <Route exact path="/" component={SignIn} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

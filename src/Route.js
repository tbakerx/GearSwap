import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Splash from './pages/Splash';
import Home from './pages/Home';

export default class Route extends Component<{}> {
  render(){
    return(
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key='splash' component={Splash} title='Splash' />
          <Scene key='home' component={Home} title='Home' initial={true} />
          <Scene key='login' component={Login} title='Login'/>
          <Scene key='signup' component={SignUp} title='SignUp'/>
        </Stack>
      </Router>
    );
  }
}

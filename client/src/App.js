import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { API } from './utils/API';
import { useAuth } from './utils/context';
import { Account, Home, LoginPassport, Logout, Guild } from './Pages/';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';



function App() {
  const [state, setState] = useState({
    ready: false,
  });
  const { auth, setAuth } = useAuth();
  const [userData, setUserData] = useState({})
  const [logBool, setLogBool] = useState(false);

  useEffect(() => {
    const res = API.getAuth();
    if (res) {
      setAuth({ ...auth, ...res });
    }
    setState({ ...state, ready: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state.ready) {
    return null;
  }

  return (
    <Router>
      <Navbar logBool={logBool} />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <Route exact path="/login"> <LoginPassport /> </Route>
        <Route exact path="/logout" ><Logout logBool={logBool} setLogBool={setLogBool} /></Route>
        <PrivateRoute exact path="/guild"><Guild userData={userData} setUserData={setUserData} /></PrivateRoute>
        <PrivateRoute exact path='/account' ><Account userData={userData} setUserData={setUserData} /></PrivateRoute>
        <Route exact path="*" render={(props) => (
          <Home {...props} />
        )}
        />

      </Switch>
    </Router>
  );
}

export default App;

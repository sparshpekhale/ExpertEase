import React ,{useState}from 'react';
import './App.css';
// eslint-disable-next-line
import Users from './user/pages/Users.js'
// import NewPlace from './places/pages/NewPlace'
import {BrowserRouter as Router , Route, Redirect, Switch } from 'react-router-dom';
// eslint-disable-next-line
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserProfile from './profile/pages/UserProfile';
import UpdateProfile from './profile/pages/UpdateProfile';
import Page1 from './authpage/page1';
import {AuthContext} from './shared/context/auth-context'
import { useCallback } from 'react';
import Chat from './chat/components/Chat';
function App() {
  
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);
  const [name, setName] = useState('your name');
  const [message, setMessage] = useState('');

  const login = useCallback((uid,nam,msg) => {
    setName(nam);
    setIsLoggedIn(true);
    setUserId(uid);
    setMessage(msg);
  }, []);

  const logout = useCallback(() => {
    setName('');
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

let routes;
if(isLoggedin)
{
  routes=(
    <React.Fragment>
      <MainNavigation/> 
         <main>
      <Route path="/" exact> 
          <Users className="back"/>
        </Route>
        <Route path="/:userId/profile" exact> 
          <UserProfile/>
        </Route>
        <Route path="/profile/:profileId" >
          <UpdateProfile/>
        </Route> 
        <Route path="/chat" exact component={Chat}/>
        <Redirect to='/'/>
        
        </main>
       
    </React.Fragment>
  );

}
else{
  routes=(
    <React.Fragment>
    <Route path="/" >
          <Page1/>
    </Route> 
    <Redirect to='/auth'/>
    </React.Fragment>
    
  );

}
  return (
    <AuthContext.Provider value={{isLoggedin : isLoggedin , login : login , logout : logout,userId:userId,name:name ,message:message}} >
    <Router>
      <Switch>
      {routes}
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;

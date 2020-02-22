import React from 'react';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postitem';
// import NotFound from './components/404';
import Conditional from "./components/conditional";
import PureComp from "./components/pureComp";
import User from "./components/user";

const App = () => {
  return(
    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">MyApp</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <NavLink 
              to="/" 
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
              exact
            >Home</NavLink>

            <NavLink 
              to="/posts" 
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
            >Posts</NavLink>

            <NavLink 
              to="/profile" 
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
            >Profile</NavLink>

            <NavLink 
              to="/conditional" 
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
            >Conditional</NavLink>

            <NavLink 
              to="/pureComp" 
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
            >Pure component</NavLink>
              
            <NavLink 
              to="/user" 
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
            >User</NavLink>
          </nav>
        </div>
      </header>
      <div className="container">
        <Switch>
          {/* <Redirect from="/profile" to="/"/> */}
          <Route path="/posts/:id" component={PostItem}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/profile" component={Profile} />
          <Route path="/pureComp" component={PureComp}/>
          <Route path="/conditional" component={Conditional}/>
          <Route path="/user" component={User}/>
          <Route path="/" component={Home} exact/>
          <Route render={()=> <h3>Opps page not found</h3>}/>
        </Switch>
       
      </div>
     
    </BrowserRouter>
  )
}

export default App;

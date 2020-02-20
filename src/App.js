import React from 'react';
import { BrowserRouter, Route, Redirect, NavLink, Switch } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/postitem";
import NotFound from "./components/404";


const App = () => {
  return (

    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-align-item-center p-3 px-md-4 mb-3 border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">My application</h5>
          <nav className="my-2 my-md-0 mr-md-3">
          <NavLink to="/posts" 
          className ="p-2 text-dark"
          activeStyle = {{fontWeight: "bold"}}
          activeClassName = "selected">POSTS</NavLink>
          <NavLink 
          to="/profile"
          className ="p-2 text-dark"
          activeStyle = {{fontWeight: "bold"}}
          activeClassName = "selected"
          >PROFILE</NavLink>
          <NavLink to="/" 
          className="p-2 text-dark"
          activeStyle = {{fontWeight: "bold"}}
          activeClassName = "selected">HOME</NavLink>
        </nav>
        </div>
      </header>
      <div className = "container">
      <Switch>
      <Route path="/posts/:id" component={PostItem}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/profile" component={Profile} />
      <Route path="/" component={Home} exact/>
      <Route component={NotFound}/>
      </Switch>
      </div>
    </BrowserRouter>

  )
}


export default App;

import React from 'react';
import {Link, Redirect} from "react-router-dom";

const Profile = (props)=> {
    const redirectUser = ()=> {

      props.history.push('/')
    }
  return(
    <>
    {redirectUser()}
    <hr/>
    <Link to={{
        pathname:`${props.match.url}/posts`
    }}>Go to posts</Link>
    </>


  )
}


export default Profile;

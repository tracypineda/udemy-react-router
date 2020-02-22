import React from 'react';
import {Link} from "react-router-dom";
import Card from "../components/hoc/card";
import Auth from "../components/hoc/auth";

const Profile = (props)=> {
  return(
    <>
    <hr/>
    <Auth>
    <Card>
    <Link to={{
        pathname:`${props.match.url}/posts`
    }}>Go to posts
    </Link>
    </Card>
    </Auth>
    </>


  )
}


export default Profile;

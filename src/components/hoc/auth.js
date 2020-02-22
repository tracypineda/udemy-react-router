import React from 'react'

const Auth = (props) => {
    const pass = "password123"


    if (pass !== "password123") {
        return <h2>You are not AUTHORIZED</h2>

    } else {
        return props.children

    }
}
export default Auth;

import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
        if(this.props.isLoggedin) return <Redirect to="/home" />;
        return(
            <><h1>Login Page</h1></>
        );
    }
}

export default Login;
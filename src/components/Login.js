import React from 'react';
import {Redirect} from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import '../sass/Register.scss';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            password: '',
            nameError: '',
        }
    }

    changeField=(ev)=>{
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    loginUser=()=>{
        if(this.state.name!=''&&this.state.password!='')
        {fetch('http://localhost:3001/users',{
            method: 'GET'
        }).then(res=>res.json()).then(res=>{
            const arr=res.filter(elem=>elem.name==this.state.name&&elem.password==this.state.password);
            if(arr.length==1)
            {
                localStorage.setItem('name',this.state.name);
                this.props.loginUser(this.state.name);
            }
            else{
                alert("Either user not found or password is wrong!");
            }
        })}
        else{
            alert("You can't leave an field empty");
        }
    }

    render(){
        if(this.props.isLoggedin) return <Redirect to="/home" />;
        return(
            <div class="login-box" style={{height: '350px', marginTop: '-50px'}}>
                <img src={avatar} class="avatar" />
                <h1 class="login" style={{fontWeight: '700'}}>Login Here</h1>

                <p class="login">Username</p>
                <input type="text" name="name" 
                placeholder="Enter Username" 
                id="usernm" value={this.state.name} 
                onChange={(e)=>this.changeField(e)}
                 />
                

                

                <p class="login">Password</p>
                <input type="password" name="password" 
                placeholder="Enter Password" 
                id="passwd" 
                value={this.state.password} 
                onChange={(e)=>this.changeField(e)}
                required />

                <input type="submit" name="submit" 
                value="Login" id="signupbut" 
                class="login"
                onClick={this.loginUser} />   

            </div> 
        );
    }
}

export default Login;
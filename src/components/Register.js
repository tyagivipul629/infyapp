import React from "react";
import { Redirect, Link } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import "../sass/Register.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      address: "",
      phone: "",
      email: "",
      passError: "",
      emailError: "",
      nameError: "",
      phoneError: "",
      addressError: "",
      redirect: false,
    };
  }

  changeField = (ev) => {
    this.setState({
      ...this.state,
      [ev.target.name]: ev.target.value,
    });
  };

  validateRegistration = () => {
    var flag = false;
    if (this.state.username.length < 3) {
      this.setState({ nameError: "Name must be atleast 3 characters long!" });
      flag = true;
    }
    if (this.state.address.length == 0) {
      this.setState({ addressError: "Address cannot be empty!" });
      flag = true;
    }
    if (this.state.phone.length != 10) {
      this.setState({ phoneError: "Phone no should be 10 digits long!" });
      flag = true;
    }
    if (this.state.email == "") {
      this.setState({ emailError: "Email cannot be empty!" });
      flag = true;
    }
    if (
      !(this.state.password.length >= 8 && this.state.password.length <= 12)
    ) {
      this.setState({
        passError: "Password should be between 8-12 characters!",
      });
      flag = true;
    }
    return flag;
  };

  registerUser = () => {
    if (!this.validateRegistration()) {
      fetch("http://localhost:1111/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.username,
          password: this.state.password,
          email: this.state.password,
          phoneNo: this.state.phone,
          address: this.state.address,
        }),
      })
        .then((res) => {
          if (res.status == 201) alert("User Registration Successful!");
          this.setState({
            ...this.state,
            redirect: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    if (this.props.isLoggedin) return <Redirect to="/home" />;
    if (this.state.redirect) return <Redirect to="/login" />;
    return (
      <div class="login-box">
        <img src={avatar} class="avatar" />
        <h1 class="login">BonStay With Us</h1>

        <p class="login">Username</p>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          id="usernm"
          value={this.state.username}
          onChange={(e) => this.changeField(e)}
        />
        <span id="error">{this.state.nameError}</span>

        <p class="login">Address</p>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          id="address"
          value={this.state.address}
          onChange={(e) => this.changeField(e)}
          required
        />
        <span id="error">{this.state.addressError}</span>

        <p class="login">Email Id</p>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          id="email"
          value={this.state.email}
          onChange={(e) => this.changeField(e)}
          required
        />
        <span id="error">{this.state.emailError}</span>

        <p class="login">Contact</p>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Contact"
          id="phone"
          pattern="[0-9]{10}"
          value={this.state.phone}
          onChange={(e) => this.changeField(e)}
          required
        />
        <span id="error">{this.state.phoneError}</span>

        <p class="login">Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="passwd"
          value={this.state.password}
          onChange={(e) => this.changeField(e)}
          required
        />
        <span id="error">{this.state.passError}</span>

        <input
          type="submit"
          name="submit"
          value="Sign Up"
          id="signupbut"
          class="login"
          onClick={this.registerUser}
        />

        <p class="login">
          Aleardy Registered? <Link to="/login">Login</Link> here
        </p>
      </div>
    );
  }
}

export default Register;

import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import config from '../../config';
import ServiceUrls from '../helpers/ServiceUrls';
import {setCacheObject, getCacheObject , removeSession } from '../helpers/globalHelpers/GlobalHelpersFunction';
import { connect } from 'react-redux';
import { login, errorlogin, setdata, resetlogin } from '../redux/actions/LoginActions'
import { URL } from '../helpers/Constants';
const LOGIN_USER_NAME = config.LOGIN_USER_NAME;
const SESSION_KEY_NAME = config.SESSION_KEY_NAME;
export class Login extends Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this);
      //  this.props.resetlogin();
       this.state = {
          login: false,
          password: "",
          error: false
        }
      }
      componentDidMount() {
        removeSession();
        let isLoggedIn = localStorage.getItem("auth");
        this.setState({ login: isLoggedIn });
        // this.refs["email"].focus();
      }
     login() {
        const { email } = this.props;
        if (email == "" || this.state.password == "") {
          this.props.onErrorLogin('Please Enter email and Password');
          return false;
        } 
    
        console.log("hiii>>>>", email, this.state.password)
        let dataObject = {
          username: email,
          password: this.state.password
        };
      this.props.onUserLogin(dataObject);
      }
    
      handleEnterKey = (e) => {
        if (e.keyCode == 13 && e.target.name == "password") {
          this.login();
        }
      }
    
      handleChange = (e) => {
        var data = { name: e.target.name, value: e.target.value }
        if (e.target.name == "email") {
          this.props.setdata(data)
        } else if (e.target.name == "password") {
          this.setState({ password: e.target.value })
        }
      } 
    render() {
        const { loading, isUserLogIn, error, email } = this.props;  
        const {password} = this.state.password
        return (
            <div class="login-padding">
                   <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card overflow-hidden">
                        <div class="bg-login text-center">
                            <div class="bg-login-overlay"></div>
                            <div class="position-relative">
                                <h5 class="text-white font-size-20">Welcome Back !</h5>
                                <p class="text-white-50 mb-0">Sign in to continue to ClubRummy.</p>
                                <a href="index.html" class="logo logo-admin mt-4">
                                    <img src="assets/images/logo-sm-dark.png" alt="" height="30"/>
                                </a>
                            </div>
                        </div>
                        <div class="card-body pt-5">
                            <div class="p-2">
                              

                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" name='email' value={email} class="form-control" id="email" placeholder="Enter username" onChange={this.handleChange}/>
                                    </div>

                                    <div class="form-group">
                                        <label for="userpassword">Password</label>
                                        <input type="password" class="form-control" name='password' value={this.state.password} id="userpassword" placeholder="Enter password" onChange={this.handleChange}/>
                                    </div>

                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customControlInline" required/>
                                        <label class="custom-control-label" for="customControlInline">Remember me</label>
                                    </div>

                                    <div class="mt-3">
                                        <button class="btn btn-primary btn-block waves-effect waves-light" type="submit" onClick={() => this.login()}>Log In</button>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a>
                                    </div>
                         
                            </div>

                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <p>Don't have an account ? <a href="pages-register.html" class="font-weight-medium text-primary"> Signup now </a> </p>
                        <p>© 2020 Qovex. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
    async componentDidUpdate(prevProps, prevState) {
        // check whether client has changed
        
          if (this.props.isUserLogIn) {
            console.log("details......................",this.props.user)
            await setCacheObject(LOGIN_USER_NAME, this.props.email);
            await setCacheObject(SESSION_KEY_NAME, this.props.user);
            this.props.history.push(URL.REDIRECT_HOME);
          
        }
      }
}

const mapStateToProps = state => {
    const { error, loading, user, isUserLogIn, email } = state.auth;
    console.log("email>>>>",isUserLogIn );
    return {
      error,
      loading,
      user,
      isUserLogIn,
      email
    }
  };


const mapDispatchToProps = dispatch => {
    return {
      onUserLogin: user => {
        dispatch(login(user));
      },
      onErrorLogin: user => {
        dispatch(errorlogin(user));
      } , setdata: user => {
        dispatch(setdata(user));
      },resetlogin: () => {
        dispatch(resetlogin());
      }
      
    }; 
  };
 export default connect(mapStateToProps, mapDispatchToProps)(Login)
//  export default Login


<template>
    <div>
        <header>

            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light navbar-scroll" >
                <div class="container">

                    <button
                                class="navbar-toggler ps-0"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#navbarExample01"
                                aria-controls="navbarExample01"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                >
                        <span
                                class="navbar-toggler-icon d-flex justify-content-start align-items-center"
                                >
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>

                     <div class="collapse navbar-collapse" id="navbarExample01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <router-link to="/" class="navbar-brand" >
                                <span class="fs-4" style="color: blue">L</span>etters</router-link>
                            </li>
                            <div class="input-group ps-5">
                                <div id="navbar-search-autocomplete" class="form-outline border" style="width: 600px">
                                <input type="search" v-model="searchValue" id="form1" class="form-control mr-sm-2" />
                                <label class="form-label" for="form1">Search</label>
                                </div>
                                <button type="button" class="btn btn-primary" @click.prevent ="handleSearch">
                                <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </ul>
                    </div>
                    
                    <ul v-if="!isUserLogged" class="navbar-nav flex-row">
                        <li class="nav-item">
                            <router-link to="/write" class="btn btn-primary mx-1">Write</router-link>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-primary mx-1" data-mdb-toggle="modal" data-mdb-target="#LoginModal">
                                Sign in
                            </button>
                        </li>
                    </ul>


                    <ul v-if="isUserLogged" class="navbar-nav flex-row">
                        <li class="nav-item">
                            <router-link to="/write" class="btn btn-primary mx-1">Write</router-link>
                        </li>
                        <div class="dropdown">
                            <button
                                class="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Hello, {{ isUserLogged.username }}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><router-link class="dropdown-item" to="/ml">My profile</router-link></li>
                                <li><router-link class="dropdown-item" to="/" @click.prevent ="handleLogOut">Log out</router-link></li>
                            </ul>
                        </div>

                    </ul>

                </div>
            </nav>

        </header>
    
                        <!--Login  Modal -->
                        <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <form>
                                        <div class="text-center">
                                            <p class="text-center fs-5">Welcome to the community</p>

                                            <!-- <a class="btn btn-primary btn-lg btn-block" style="background-color: #F65314" href="#!"
                                                role="button">
                                                <i class="fab fa-google me-2"></i>Continue with Google
                                            </a>
                                            <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                                                role="button">
                                                <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                                            </a>
                                            <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                                                role="button">
                                                <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
                                                            <a class="btn btn-primary btn-lg btn-block" style="background-color: #0E76A8" href="#!"
                                                role="button">
                                                <i class="fab fa-linkedin me-2"></i>Continue with LinkedIn
                                            </a> -->
                                            <!-- <a class="btn btn-primary btn-lg btn-block" 
                                                style="background-color: #171515" 
                                                href="/git_login"
                                                role="button"
                                                >
                                                <i class="fab fa-github me-2"></i>Continue with Github
                                            </a> -->

                                        </div>
                                        <!-- <p class="text-center my-2">or:</p>   -->
                                        <!-- Email input -->
                                        <div class="form-outline mb-2 border">
                                        <input 
                                            type="text" 
                                            id="lEid" 
                                            v-model="email" 
                                            class="form-control" 
                                            autocomplete="off"
                                            @click="errShow.emailNull = errShow.login = false"
                                             />
                                        <label class="form-label" for="lEid">Username / Email</label>
                                        </div>
                                        <cite v-if="errShow.emailNull" class="error fs-6">username or email should be given</cite>
                                    
                                        <!-- Password input -->
                                        <div class="form-outline mb-2 border">
                                        <input 
                                            type="password" 
                                            id="lpwd" 
                                            v-model="password"
                                            class="form-control"
                                            autocomplete="off"
                                            @click.prevent ="errShow.passNull = errShow.login = false"
                                            />
                                        <label class="form-label active" for="lpwd">Password</label>
                                        </div>
                                        <cite v-if="errShow.passNull" class="error fs-6">password should not be empty </cite>
                                        
                                        <div class="row mb-4">
                                        <div class="col d-flex justify-content-center">
                                            <!-- Checkbox -->
                                            <div class="form-check">
                                            <input class="form-check-input" 
                                                type="checkbox" 
                                                checked 
                                                v-model="remember" id="lrme" />
                                            <label class="form-check-label" for="lrme"> Remember me </label>
                                            </div>
                                        </div>
                                    
                                        <div class="col">
                                            <!-- Simple link -->
                                            <a href="#" data-mdb-toggle="modal" data-mdb-target="#FpModal">Forgot Password</a>
                                        </div>
                                        </div>
                                    
                                        <!-- Submit button -->
                                        <button v-if="!spinner.login" type="submit" class="btn btn-primary btn-block mb-4" @click.prevent ="handleLogin">Sign in</button>
                                        
                                        <!-- spinner -->
                                        <div v-if="spinner.login" class="d-flex justify-content-center">
                                            <div class="spinner-border text-primary" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                        <cite v-if="errShow.login" class="error fs-6">{{ errShow.login }}</cite>
                                        <!-- Register buttons -->
                                        <div class="text-center">
                                        <p>Not a member? <a href="#" data-mdb-toggle="modal" data-mdb-target="#SignUpModal">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>


                    <!-- SignUp Modal  -->
                    <div class="modal fade" id="SignUpModal" tabindex="-1" aria-labelledby="SignUpModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form v-if="!succShow.register">

                                <p class="text-center">Welcome to the community</p>

                                <div>
                                    <!-- <a class="btn btn-primary btn-lg btn-block" style="background-color: #F65314" href="#!"
                                    role="button">
                                    <i class="fab fa-google me-2"></i>Continue with Google
                                </a>
                                <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
                                    role="button">
                                    <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                                </a>
                                <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
                                    role="button">
                                    <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
                                <a class="btn btn-primary btn-lg btn-block" style="background-color: #0E76A8" href="#!"
                                    role="button">
                                    <i class="fab fa-linkedin me-2"></i>Continue with LinkedIn
                                </a> -->
                                <!-- <a class="btn btn-primary btn-lg btn-block" style="background-color: #171515" 
                                    @click.prevent ="handleGithub"
                                    href="#!"
                                    role="button">
                                    <i class="fab fa-github me-2"></i>Continue with Github
                                </a> -->

                                </div>                                
                                
                                <!-- <p class="text-center">or:</p> -->
                                <div class="form-outline mb-1 border">
                                <input 
                                    type="text" 
                                    v-model="username" 
                                    id="spuname"
                                    @click.prevent ="errShow.userNull = false"
                                    autocomplete="off"
                                    class="form-control"/>
                                <label class="form-label" for="spuname">User name</label>
                                </div>
                                <cite v-if="errShow.userNull" class="error fs-6">username should not be empty </cite>

                                <div class="form-outline mb-1 border">
                                <input 
                                    type="email" 
                                    v-model="email" 
                                    id="speid"
                                    @click.prevent ="errShow.emailNull =  errShow.emailRegex = false"
                                    autocomplete="off"
                                    class="form-control"/>
                                <label class="form-label" for="speid">Email address</label>
                                </div>
                                <cite v-if="errShow.emailNull" class="error fs-6">email should not be empty </cite>
                                <cite v-if="errShow.emailRegex" class="error fs-6">email is not valid</cite>

                                <div class="form-outline mb-1 border">
                                <input 
                                    type="password" 
                                    v-model="password" 
                                    id="spwd" 
                                    @click.prevent ="errShow.passNull = errShow.passRegex = false"
                                    autocomplete="off"
                                    class="form-control"/>
                                <label class="form-label" for="spwd">Password</label>
                                </div>
                                <cite v-if="errShow.passNull" class="error fs-6">password should not be empty </cite>
                                <cite v-if="errShow.passRegex" class="error fs-6">password is not valid. Use atleast 8 chars 
                                    including capital, special character and number
                                </cite>

                                <div class="form-outline mb-1 border">
                                <input 
                                    type="password" 
                                    v-model="rPassword" 
                                    id="srpwd" 
                                    @click.prevent ="errShow.rpassNull = errShow.passMismatch = false"
                                    autocomplete="off"
                                    class="form-control"/>
                                <label class="form-label" for="spwd">Repeat password</label>
                                </div>
                                <cite v-if="errShow.rpassNull" class="error fs-6">Repeat password should not be empty </cite>
                                <cite v-if="errShow.passMismatch" class="error fs-6">Password not matched. check again </cite>
                                <button v-if="!spinner.signup" type="submit"  class="btn btn-primary btn-block mb-2" @click.prevent ="handleRegiser">Sign up</button>
                                
                                <div v-if="spinner.signup" class="d-flex justify-content-center">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <cite v-if="errShow.register" class="error fs-6">{{ errShow.register }}</cite>
                                <cite class="fs-6">By sign up, you are agreeing to the 
                                    <a href="/terms">terms of service</a>
                                     and <a href="/privacy">privacy policy</a></cite>
                                <div class="text-center">
                                <p>Already a member? <a href="#!" data-mdb-toggle="modal" data-mdb-target="#LoginModal">Login</a></p>
                                </div>
                            </form>
                            <div v-if="succShow.register">
                                <p class="text-center fs-4">{{ succShow.register }}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                 <!--Forgot Password Modal -->
                    <div class="modal fade" id="FpModal" tabindex="-1" aria-labelledby="FpModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <form>
                                    <!-- Email input -->
                                    <div v-if="showForgot">
                                        <div class="form-outline mb-4">
                                        <input type="email" id="fpeid" 
                                        v-model="forgotEmail" 
                                        class="form-control"
                                        autocomplete="off"
                                        @click.prevent ="femailNull= false"
                                        />
                                        <label class="form-label" for="fpeid">Email address</label>
                                        </div>
                                        <cite v-if="errShow.femailNull" class="error fs-6">email should not be empty </cite>
                                        <!-- Submit button -->
                                        <button v-if="!spinner.getOTP" type="submit" class="btn btn-primary btn-block mb-4" @click.prevent ="handleForgotPassword">Get OTP</button>
                                        <!-- spinner -->
                                        <div v-if="spinner.getOTP" class="d-flex justify-content-center">
                                            <div class="spinner-border text-primary" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="otpSent" class="form-outline mb-4">
                                    <input 
                                        type="text"
                                        id="fpeid"
                                        v-model="otp"
                                        autocomplete="off"
                                        class="form-control" />
                                    <label class="form-label" for="otp">Enter OTP</label>
                                    <button v-if="!spinner.otpValidator" type="submit" class="btn btn-primary btn-block mb-4 my-3" @click.prevent ="handleOTP">Submit</button>
                                    <div v-if="spinner.otpValidator" class="d-flex justify-content-center">
                                            <div class="spinner-border text-primary" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                    </div>
                                    </div>

                                    <div v-if="showReset">
                                        <!-- Password Reset -->
                                        <div 
                                            class="form-outline mb-1 border">
                                            <input type="password"
                                             v-model="password" 
                                             id="spwd" 
                                             class="form-control"
                                             autocomplete="off"
                                            @click.prevent ="errShow.resetpassMismatch = false" />
                                            <label class="form-label" 
                                            for="spwd">New Password</label>
                                        </div>

                                        <div 
                                            class="form-outline mb-1 border">
                                            <input type="password" 
                                            v-model="rPassword" 
                                            id="srpwd" 
                                            autocomplete="off"
                                            @click.prevent ="errShow.resetpassMismatch = false"
                                            class="form-control" />
                                            <label class="form-label" 
                                            for="spwd">Repeat password</label>
                                        </div>

                                        <cite v-if="errShow.resetpassMismatch" class="error fs-6">Password not matched. check again </cite>
                                        <button v-if="!spinner.rP" type="submit" class="btn btn-primary btn-block mb-4 my-3" @click.prevent ="handleReset">Submit</button>
                                        <div v-if="spinner.rP" class="d-flex justify-content-center">
                                            <div class="spinner-border text-primary" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="succShow.resetPass">
                                        <cite class="fs-6">{{ succShow.resetPass }}</cite>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>

    </div>
</template>


<script>

import axios from 'axios'
import { urls } from '../../src/helper'


export default {
    name: "Header",
    data(){
        return{
            username: '',
            email: '',
            forgotEmail: '',
            password: '',
            rPassword: '',
            remember:'',
            showReset: '',
            showForgot: true,
            otp: '',
            query: '',
            searchValue: "",
            otpSent: false,
            error: "",
            spinner: {
                login: "",
                signup: "",
                getOTP: "",
                otpValidator: "",
                rP: ""
            },
            succShow: {
                register: "",
                resetPass: ""
            },
            errShow: {
                userNull: false,
                emailNull: false,
                femailNull: false,
                passNull: false,
                rpassNull: false,
                emailRegex: false,
                passRegex: false,
                passMismatch: false,
                resetpassMismatch: false,
                register: "",
                login: ""
            }
        }
    },
    methods: {
        handleLogOut(){
            sessionStorage.removeItem('token');
            localStorage.removeItem("token");
            this.$store.dispatch('changeUserState', null);
            this.$router.push('/')
        },
        async handleLogin() {
            try{
                if(!this.email){
                this.errShow.emailNull = true
                return
            }
            else if(!this.password){
                this.errShow.passNull = true
                return
            }
          this.spinner.login = 1
          let loginUrl = urls().VIM_BASE + urls().VIM_APP + urls().LOGIN

          const response = await axios.post(loginUrl, {
            user_name : this.email,
            password : this.password
          })
          console.log(response)
          if(response.data.status === "error"){
              this.spinner.login = 0
              this.errShow.login = response.data.message 
            return
          }
          else if(response.data.status == "success"){
              if (this.remember){
                localStorage.setItem('token', response.data.token)
              }
              else{
                sessionStorage.setItem('token', response.data.token);
              }
              this.$store.dispatch('changeUserState', response.data.token)
              this.$router.go('/')
          }
            }
            catch(e){

            }
      },
        async handleRegiser(){
            try{
                let emailRegex = /^\S+@\S+\.\S+$/
                this.errShow.register = ""
                if( !this.username ){
                    this.errShow.userNull = true
                    return
                }
                else if(!this.email){
                    this.errShow.emailNull = true
                    return
                }
                else if(!this.password){
                    this.errShow.passNull = true
                    return
                }
                else if(!this.rPassword){
                    this.errShow.rpassNull = true
                    return
                }
                else if(!emailRegex.test(this.email)){
                    this.errShow.emailRegex = true
                    return
                }
                else if (this.password !== this.rPassword){
                    this.errShow.passMismatch = true
                    return
                }
                this.spinner.signup = 1
                let registerUrl = urls().VIM_BASE + urls().VIM_APP + urls().REGISTER
                const response = await axios.post(registerUrl, {
                    user_name : this.username,
                    email : this.email, 
                    password : this.password
                })
                this.spinner.signup = 0
                if(response.data.status === "error"){
                    this.errShow.register = response.data.message
                }
                else if(response.data.status === "success"){
                    this.username = this.password = this.email = ""
                    this.succShow.register = response.data.message
                }
            } 
            catch(e){
                this.error = e.message;
            }
        },
        handleSearch(){
            if(!this.searchValue){
                return
            }
            this.$router.push(`/s/${this.searchValue}`).then(res => this.$router.go())
        },
        async handleForgotPassword(){
            if (!this.forgotEmail){
                this.errShow.femailNull = true
                return
            }
            this.spinner.getOTP = 1
            let forgotPwd = urls().VIM_BASE + urls().FORGOT_PASSWORD
            const response = await axios.post(forgotPwd, {
                "email": this.forgotEmail
            })
            if (response.data.status == "success"){
                this.spinner.getOTP = 0
                this.showForgot = false
                this.otpSent = true
                this.succShow.resetPass = response.data.message
            }
            else{
                this.spinner.getOTP = 0
                this.otpSent = false
                alert(response.data.message)
            }
        },
        async handleOTP(){
            this.spinner.otpValidator = 1
            this.succShow.resetPass = ""
            let optValidate = urls().VIM_BASE + urls().FORGOT_PASSWORD
            const response = await axios.post(optValidate, {
                "otp": this.otp
            })
            if (response.data.status == "success"){ 
                this.spinner.otpValidator = 0
                this.otpSent = false
                this.showReset = true
            }
            else{
                this.spinner.otpValidator = 0
                alert(response.data.message)
            }
        },
        async handleReset(){
            if (this.password !== this.rPassword){
                    this.errShow.resetpassMismatch = true
                    return
                }
            this.spinner.rP = 1
            let resetPwd = urls().VIM_BASE + urls().RESET_PASSWORD
            const response = await axios.post(resetPwd, {
                "email": this.forgotEmail,
                "password": this.password
            })
            console.log(response.data)
            if (response.data.status === "success"){
                this.spinner.rP = 0
                this.showReset = false
                this.succShow.resetPass = response.data.message
            }
            else{
                this.spinner.rP = 0
                alert(response.data.message)
            }
        }
    },
    computed: {
        isUserLogged(){
            return this.$store.getters.stateValue.user
        }
    }
}
</script>

<style>
</style>
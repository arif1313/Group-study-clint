import { useContext, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";
import { FcGoogle } from "react-icons/fc";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimg from '../../../public/images/R-removebg-preview.png'
import axios from "axios";


const Login = () => {
  const [loginError, SetLoginError] = useState('')
  const emairef = useRef(null)

  const { SinIn, gogleSignIn, resetPass } = useContext(AutContext);
  const navigate = useNavigate()
  const location = useLocation()


  const handelgogle = () => {

    gogleSignIn()
      .then(result => {
        navigate(location?.state ? location.state : '/')
        console.log(result.LoggedInUser)
      })
      .catch(error => {
        console.error(error.message)

      })

  }

  const hanleLogin = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value


    SetLoginError('')


    if (password.length < 6) {
      toast("Password should be at least 6 characters")

      return

    }
    else if (!/[A-Z]/.test(password)) {
      toast('Password should have a Upercase')


      return
    }

    else if (!/[\W_]/.test(password)) {

      toast('Passoword should have a Special Charecter')
      return

    }


    SinIn(email, password)
      .then(result => {
        const LoggedInUser = result.user;
      
        // access token
        console.log(LoggedInUser)
        // const user = {email};
        navigate(location?.state ? location.state : '/')
        // axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        // .then(res =>{
        //   console.log(res.data)
         
        // })



      })
      .catch(error => {
        console.log(error)
        toast("email of password not match please set correct email and password")
      })

  }

  const handleforget = () => {
    const email = emairef.current.value

    if (!email) {
      toast("please set a valid emai for reset password")
      return
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast('please set a vaild email for reset password')
      return
    }
    resetPass(email)
      .then(() => {
        toast('chack your email')
      })
      .catch(error => {
        console.log(error)
        toast("reset failed try again")

      })
  }
  return (
    <div className=" w-full min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left">
          <img src={loginimg} alt="" />
        </div>
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-divColor">
          <form className="card-body" onSubmit={hanleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"
                name="email"
                ref={emairef}
                placeholder="email"
                className="input input-bordered border-buttonColor " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered border-buttonColor " required />
              <label className="label ">
                <Link to="/sinup" className="label-text-alt link link-hover font-bold">Have no account? register.</Link>
                <Link href="" onClick={handleforget}> Foget Password</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary bg-buttonColor border-none text-neutral-950 font-bold">Login</button>
            </div>

          </form>
          <div className="form-control my-3 flex mx-7 mb-6 ">


            <button className="btn btn-outline  text-blue-600 normal-case" onClick={handelgogle}> <FcGoogle className="w-7 h-7"></FcGoogle> Signin with google</button>
          </div>
          {
            loginError && <p className="text-red-700">{loginError}</p>
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import regimg from '../../../public/images/OIP__1_-removebg-preview.png'



const SineUp = () => {
  const { createuser, gogleSignIn,profileUpdate} = useContext(AutContext);
  const [resistarError, setResistererror] = useState();
  const [succes, setSucces] = useState('')
  const navigate = useNavigate()
  const location =useLocation()

  const handelgogle = () => {

    gogleSignIn()
      .then(result => {
        navigate(location?.state? location.state: '/')
        console.log(result.user)
      })
      .catch(error => {
        console.error(error.message)

      })

  }

  const hanleSinUP = (e) => {

    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value;
   

    setSucces('')
    setResistererror('')

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


    createuser(email, password)
      .then(result => {
        console.log(result.user)
        toast('User created succesfullly!!')
        e.target.reset();
        navigate('/login')
        profileUpdate(result.user, name,url)
        .then(res=> {
          console.log('updateed profile',res)
          })
          .catch(error=>{
            console.log('updated error is ', error)
          })

      })
      .catch(error => {

        toast(error.message)


      })
    }
  return (
    <div className=" w-full min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-around ">
        <div className="text-center lg:text-left">
          <img src={regimg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-divColor">
          <form className=" card-body" onSubmit={hanleSinUP}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered border-buttonColor " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered border-buttonColor " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input type="text" name="url" placeholder="photoUrl" className="input input-bordered border-buttonColor " required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered border-buttonColor " required />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover font-bold">Already have an acount?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary bg-buttonColor border-none text-neutral-950 font-bold">register</button>
            </div>
          
            {
              resistarError && <p className="text-red-700">{resistarError}</p>
            }
            {
              succes && <p className="text-green-500">{succes}</p>
            }

          </form>
          <div className="form-control my-6 flex mx-7 ">


<button className="btn btn-outline  text-blue-600 normal-case" onClick={handelgogle}> <FcGoogle className="sm:w-3 md:w-7 sm:h-3 md:h-7"></FcGoogle> Signin with google</button>
</div>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SineUp;
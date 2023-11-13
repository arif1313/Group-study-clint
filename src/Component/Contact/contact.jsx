

 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const handleSent=()=>{
   
        toast("SMS set successfully!!!")

    }
    return (
        <div>
            <div className=" w-full min-h-screen " >
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
         
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSent} className=" card-body">
               
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input  type="text" name="name" placeholder="Name" className="input input-bordered border-pink-400 " required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered border-pink-400 " required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write SMS</span>
                </label>
                <textarea className="border-2 border-pink-600" name="sms" id="" cols="30" rows="5"></textarea> </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary bg-pink-400 border-none text-white">sent</button>
              </div>
     
            </form>
          
          </div>
        </div>
      </div>
      <ToastContainer />
        </div>
    );
};

export default Contact;
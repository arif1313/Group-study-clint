import { useContext, useEffect } from "react";
import getFormData from "../../utilities/getFormData";

import moment from 'moment';
import { AutContext } from "../Contex/ContexApi";


const Submitio = () => {
    useEffect(()=>{
        fetch(`http://localhost:5000/mytakenAssignment/${id}`

    },[])
    
    const { user } = useContext(AutContext);
    const handleSubmit =(e)=>{
       
       const submitLink= e.target.submitlink.value;
       const submitionTime = moment().format("MMM Do YY"); 
       const submiteddata = {
        submitLink,
        submiedMail: user?.email,
        submitionTime,
        submitionAssId:_id,



       }

    }
    return (
        <div>
               <div>
            <div>
            <div className="hero min-h-screen ">
    <div className="card flex-shrink-0 w-full shadow-2xl bg-divColor">
      <form className="card-body" onSubmit={handleSubmit}>
      <div className="">

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Submiton url </span>
          </label>
          <input type="text"  name="submitlink" placeholder="Assignment link" className="input input-bordered" required />
        </div>
      </div>
 
        <div className="form-control mt-6 flex justify-center text-center">
         
           <div> <button className="btn btn-warning w-1/2 " >Update</button></div>
        
        </div>
      </form>
      <div className=" w-full flex justify-center mb-3">
         
      <div className="w-1/2 px-5">
      <button className="btn btn-success bg-buttonColor w-full ">cancle</button>
      </div>
     
     </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Submitio;
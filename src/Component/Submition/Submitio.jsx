import { useContext, useEffect, useState } from "react";

import moment from 'moment';
import { AutContext } from "../Contex/ContexApi";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Submitio =  () => {
    const submitiontargetdata = useLoaderData();
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline,gotUserEmail,assingnment_Id,Status}= submitiontargetdata;
    const [isSubmitted, setSubmitted] = useState(false);
    const { user } = useContext(AutContext);

    useEffect(() => {
      // Check if the assignment has been submitted by reading from localStorage
      const isAssignmentSubmitted = localStorage.getItem('isAssignmentSubmitted');
      if (isAssignmentSubmitted) {
        setSubmitted(true);
      }
    }, []);
  

    const handleSubmit =(e)=>{
        e.preventDefault();
       
       const submitLink= e.target.submitlink.value;
       const submitionTime = moment().format("MMM Do YY"); 
       const submiteddata = {
        ownerEmail,
        submitLink,
        submiedMail: user?.email,
        submitionTime,
        submitionAssId:assingnment_Id,
        Title,
        Marks,
        Description,
        Deadline
       }

       fetch("http://localhost:5000/submition", {
        method: "POST", 
        headers: {
            'content-type': 'application/json',
        }, 
        body: JSON.stringify(submiteddata),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
          swal("Good job!", "You clicked the button!", "success");
        }
    });
// //////////
setSubmitted(true);

// Store the information in localStorage to persist it across page reloads
localStorage.setItem('isAssignmentSubmitted', 'true');
    // //////////
    e.target.reset();

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
         {
          !isSubmitted&& <div> <button className="btn btn-warning w-1/2 " >submit</button></div>
        }
        </div>
      </form>
      <div className=" w-full flex justify-center mb-3">
         
     
     
     </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Submitio;
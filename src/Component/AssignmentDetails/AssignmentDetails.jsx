
import { Link, useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
    const Singleassignment = useLoaderData();
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline}= Singleassignment;
   
    return (
        <div>
         <div className="hero min-h-screen text-mainTextcolor">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ImgUrl} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{Title} <span className="badge badge-secondary badge-outline">{Difficulty}</span> </h1>
      <p className="py-6">{Description}</p>
      <div className="tex-xl my-3 font-bold"><h2>Total Mark : {Marks}</h2> <h2>Dethline : {Deadline}</h2></div>
      <Link to="/takenAssingment" className="btn btn-accent w-1/2" >get Assignment</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignmentDetails;
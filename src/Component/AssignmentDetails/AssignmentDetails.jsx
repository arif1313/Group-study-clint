
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";
import swal from "sweetalert";


const AssignmentDetails = () => {
  const { user} = useContext(AutContext);
    const Singleassignment = useLoaderData();
    const [click, setClick]=useState(false);
    const [takeassignment, setTakenAssignment] = useState([]);
    
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline,Status}= Singleassignment;
    useEffect(() => {
      fetch(`http://localhost:5000/mytakenAssignment?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setTakenAssignment(data));
  }, [user]);


  const matchAssignmet = takeassignment.find(obj => obj.assingnment_Id===_id)


   const handleAddAssignment =()=>{
  
    const myTakeTask = {
      Title,
      Marks,
      ImgUrl,
      Difficulty,
      ownerEmail,
      Description,
      Deadline,
      gotUserEmail: user?.email,
      assingnment_Id : _id,
      Status: 'taken'

    };
    fetch("http://localhost:5000/takenAssignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myTakeTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          swal('Assignment goted')
        }
      });
      setClick(true)
   }

    return (
        <div>
         <div className="hero min-h-screen text-mainTextcolor">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={ImgUrl} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{Title} <span className="badge badge-secondary badge-outline">{Difficulty}</span> </h1>
      <p className="py-6">{Description}</p>
    <div className="tex-xl my-3 font-bold"><h2>Total Mark : {Marks}</h2> <h2>Dethline : {Deadline}</h2></div>
  {
    
   matchAssignmet||click?<button  className="btn  w-1/2 font-bold" >Already taken</button>  :<button onClick={handleAddAssignment} className="btn btn-accent w-1/2" >get Assignment</button>
    
  }
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignmentDetails;
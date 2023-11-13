// import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Assignmentcard from "../AssignmentCard/Assignmentcard";
import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";

import { useRef } from "react";
import {useNavigate } from "react-router-dom";
import Carosol from "../Carosol/Carosol";
// import axios from "axios";



const Home = () => {
    const { user } = useContext(AutContext);
    const usermail = user?.email;
    console.log('usermail is ', usermail);
    const [displayAssign, setDisplayAssign]= useState([]);
    const [assignments, setAsssignmen] = useState([]);
  const navigate = useNavigate();
    const CaraRef = useRef(null)
    // const assignments= useLoaderData();
    
   
    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data =>{
                setDisplayAssign(data)
                setAsssignmen(data)
            })
    }, [])
    console.log(assignments)
    console.log(displayAssign)
   
    console.log('hello')
const handleSector =()=>{
  
   const catagory = CaraRef.current.value;
   console.log('catagory',catagory)
   if(catagory==='all')
   {
    setDisplayAssign(assignments)
    return
   }
   const searchResult = assignments.filter(obj=>obj.Difficulty === catagory)
      if(searchResult.length > 0 )
      {
        setDisplayAssign(searchResult);
      }else{
        swal('search catagory not found')
        setDisplayAssign(assignments)
      }
  
}
    const handleDelete = (id,ownerEmail) => {

      if(usermail){
        if (usermail === ownerEmail) {
            const procced = confirm('are you sure to delete? ')
            if (procced) {
                fetch(`http://localhost:5000/assignments/${id}`,
                    {
                        method: 'DELETE'

                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            swal('delete succes')
                            const remaining = assignments.filter(assignment => assignment._id !== id)
                            setAsssignmen(remaining);
                        }
                    })

            }
        }
        else {
            swal('you can not delete it, it is not your post ')
        }
      }else{
        navigate('/login')
      }

    }
    return (
        <div>
            <Carosol></Carosol>
           
            <div className="flex justify-center items-center">
            <div  className="text-center p-5 text-2xl font-bold text-mainTextcolor"><h2>
            Searh catagory 
                </h2>
                </div>
                <select ref={CaraRef} onInput={handleSector} name="category" id="category" className="font-bold text-xl bg-buttonColor rounded-md w-1/3 p-2 text-center ">
                <option value="all">All</option>
                    <option value="hard">hard</option>
                    <option value="medium">medium</option>
                    <option value="easy">easy</option>
                 
                </select>   
            
            </div >
            { 
                displayAssign.map(assignment => <Assignmentcard key={assignment._id} Assignment={assignment} handleDelete={handleDelete}  ></Assignmentcard>)
           
            } 
    
        </div>
    );
};

export default Home;
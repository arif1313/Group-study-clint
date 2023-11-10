// import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Assignmentcard from "../AssignmentCard/Assignmentcard";
import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Home = () => {
    const { user } = useContext(AutContext);
    const usermail = user?.email;
    console.log('usermail is ', usermail);
    const [assignments, setAsssignmen] = useState([]);
    const navigate = useNavigate();
    // const assignments= useLoaderData();
    const url='http://localhost:5000/assignments';
    useEffect(() => {
        axios.get(url,{withCredentials: true })
        .then(res=>{
            setAsssignmen(res.data)
        })
        // fetch()
        //     .then(res => res.json())
        //     .then(data => setAsssignmen(data))
    }, [])

    const handleDelete = (id, ownerEmail) => {

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
            <div className="flex">
                <select name="category" id="category" className="font-bold text-xl bg-buttonColor rounded-md">
                    <option value="hard">hard</option>
                    <option value="medium">medium</option>
                    <option value="easy">easy</option>

                </select>
                <div className="form-control w-full">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <button className="btn btn-secondary bg-buttonColor ml-4 text-mainTextcolor">seacch</button>

            </div >
            {
                assignments.map(assignment => <Assignmentcard key={assignment._id} Assignment={assignment} handleDelete={handleDelete}  ></Assignmentcard>)
            }
        </div>
    );
};

export default Home;
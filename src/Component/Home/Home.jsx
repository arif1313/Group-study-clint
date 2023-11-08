import { useLoaderData } from "react-router-dom";
import Assignmentcard from "../AssignmentCard/Assignmentcard";


const Home = () => {
    const assignments= useLoaderData();
    console.log(assignments)
    
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
        assignments.map(assignment=><Assignmentcard key={assignment._id} Assignment={assignment}></Assignmentcard>)
       }
        </div>
    );
};

export default Home;
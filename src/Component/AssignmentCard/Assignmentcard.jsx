


import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Assignmentcard = ({Assignment,handleDelete,handleupdate}) => {
    
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline}=Assignment;

   

    
    return (
        <div className='mt-7 relative'>
        <div  className='flex gap-16 mb-5 shadow-lg rounded-lg bg-divColor' >
            <div>
                    <img className=' border-divColor border-4 w-96 h-full rounded-lg' src={ImgUrl} alt="" />
            </div>
           <div className='w-full '>
           <div className='w-3/4 p-5 space-y-5'>
              
              <h1 className='text-xl font-bold'>{Title}    <span className="badge badge-secondary badge-outline">{Difficulty}</span> </h1>
           
              <h2>Posted By: {ownerEmail}</h2>
              Marks: {Marks} <br />
            Due Date :{Deadline}
          
           <div>
           <button className='btn btn-accent btn-sm mr-7' onClick={()=>handleDelete(_id,ownerEmail)}>delete</button>
          
           
          
         
          <button  onClick={()=>handleupdate(_id,ownerEmail)} className='btn btn-warning btn-sm'>Update!</button>
         
          <Link to={`/update/${_id}`}  className='btn btn-warning btn-sm'>Update!</Link>
         
         
         <Link to={`/assignmentsDetails/${_id}`}> <button  className="btn btn-circle absolute btn-outline right-5 bottom-3">
 <BsArrowRight></BsArrowRight>
</button></Link>
           </div>
           
          
           </div>
           </div>
        </div>
    </div>
    );
};

export default Assignmentcard;
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Takendata = ({taken,handleSubmit}) => {
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline,gotUserEmail,assingnment_Id,Status}=taken;
  
  
    return (

        <>

        <tbody>
        {/* row 1 */}
        <tr className="bg-divColor shadow-lg">
          
          <td>
            <div className="flex items-center space-x-3">
             
              <div>
                <div className="font-bold">  {Title}y</div>
              
              </div>
            </div>
          </td>
          <td>
         {Deadline}
           
          </td>
          <td>
         {Marks}
           
          </td>
          <td></td>
          <td>
            <button className="btn btn-warning font-bold btn-xs">{Status}</button>
          </td>
          <td >
           <div>
            {
                Status!=='submited'&&
  <Link to={`/submition/${_id}`} className={`btn btn-secondary font-bold btn-xs` } onClick={()=>handleSubmit(_id)} >submit</Link>
            }
         
           </div>
          </td>
        </tr>
       
      </tbody>

      </>
    );
};

export default Takendata;
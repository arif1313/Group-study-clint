import { useState } from "react";
import swal from "sweetalert";


const Takendata = ({taken,handleSubmit}) => {
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline,gotUserEmail,assingnment_Id,Status}=taken;
  
    const [click, setClick]=useState(false);
    console.log(click)
  
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
           <div className={click&&'hidden'}>
           <button className={`btn btn-secondary font-bold btn-xs` } onClick={()=>handleSubmit(_id,setClick)} >submit</button>
           </div>
          </td>
        </tr>
       
      </tbody>

      </>
    );
};

export default Takendata;
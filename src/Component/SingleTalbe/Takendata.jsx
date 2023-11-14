import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AutContext } from "../Contex/ContexApi";


const Takendata = ({taken,handleSubmit}) => {
  const { user } = useContext(AutContext);
    const {_id,Title,Marks,Deadline,assingnment_Id,Status}=taken;
  const [singleSubmited, setSingleSubmited]=useState([])
  // const [gainMark, setgeinMark]= useState('');
  useEffect(()=>{

    fetch(`https://goup-server.vercel.app/marksubmition?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setSingleSubmited(data))
  },[])

 const  matchSubmiteddata = singleSubmited.find(obj=>obj.submitionAssId === assingnment_Id)

  
 
  console.log('submitmarkdata',singleSubmited)
  

  
    return (

        <>

        <tbody className="font-bold">
     
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
          <td className="font-bold">{matchSubmiteddata?(matchSubmiteddata.ObtainMark?matchSubmiteddata.ObtainMark:'Mark_Panding'):'Not_Submited'}</td>
          <td>
            <button className="btn btn-warning font-bold btn-xs">{Status}</button>
          </td>
          <td >
           <div>
            {
                Status!=='submited'&&
  <Link to={`/submition/${_id} ` }className={`btn btn-secondary font-bold btn-xs` } onClick={()=>handleSubmit(_id)} >submit</Link>
            }
         
           </div>
          </td>
        </tr>
       
      </tbody>

      </>
    );
};

export default Takendata;
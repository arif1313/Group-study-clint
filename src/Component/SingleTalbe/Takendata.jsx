import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AutContext } from "../Contex/ContexApi";


const Takendata = ({taken,handleSubmit}) => {
  const { user } = useContext(AutContext);
    const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline,gotUserEmail,assingnment_Id,Status}=taken;
  const [singleSubmited, setSingleSubmited]=useState([])
  // const [gainMark, setgeinMark]= useState('');
  useEffect(()=>{

    fetch(`http://localhost:5000/marksubmition?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setSingleSubmited(data))
  },[])

 const  matchSubmiteddata = singleSubmited.find(obj=>obj.submitionAssId === assingnment_Id)
//  matchSubmiteddata && setgeinMark(matchSubmiteddata.ObtainMark);
  
 
  console.log('submitmarkdata',singleSubmited)
  
  // console.log(Object.keys(matchSubmiteddata).join(","))
  
    return (

        <>

        <tbody className="font-bold">
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
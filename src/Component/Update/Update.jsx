import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import getFormData from "../../utilities/getFormData";


const Update = () => {
    const assignment = useLoaderData();
    const navigate =useNavigate();
   const {_id,Title,Marks,ImgUrl,Difficulty,ownerEmail,Description,Deadline}=assignment;
   const handleSubmitUpdate =(e)=>{
    e.preventDefault()

    
   const updatedData = getFormData(e);
  console.log('updatedata',updatedData);
  console.log(ownerEmail,_id)

    fetch(`http://localhost:5000/assignments/${_id}`,{
        method: 'PUT',
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
        
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount >0){
            swal('updated succesfully')
            navigate('/')
            // updata state
        }
    })

   }

    return (
        <div>
            <div>
            <div className="hero min-h-screen ">
    <div className="card flex-shrink-0 w-full shadow-2xl bg-divColor">
      <form className="card-body" onSubmit={handleSubmitUpdate}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="Title" defaultValue={Title} placeholder="Assignment Title" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="text" defaultValue={Marks} name="Marks" placeholder="Assignment Marks" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbral Url</span>
          </label>
          <input type="text" defaultValue={ImgUrl} name="ImgUrl" placeholder="Assignment Thumbral Url" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Deadline</span>
          </label>
          <input type="date" defaultValue={Deadline} name="Deadline" className="input input-bordered" required />
        </div>
      </div>
      <select defaultValue={Difficulty} name="Difficulty" id="Difficulty" className="font-bold text-xl bg-buttonColor rounded-md">
                <option value="hard">hard</option>
                <option value="medium">medium</option>
                <option value="easy">easy</option>
                </select>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea defaultValue={Description} className="rounded-lg" name="Description" id="" cols="30" rows="5" required></textarea>
        </div>
        <div className="form-control mt-6 flex ">
         
            <button className="btn btn-warning " >Update</button>
        
        </div>
      </form>
      <div className="form-control flex mx-7 mb-5 ">
         
         <button className="btn btn-success bg-buttonColor">cancle</button>
     
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Update;
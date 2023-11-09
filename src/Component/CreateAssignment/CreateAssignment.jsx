import { useContext } from "react";
import { AutContext } from "../Contex/ContexApi";
import swal from 'sweetalert';

const CreateAssignment = () => {
    const { user } = useContext(AutContext);

    const handleCreate =(e)=>{
      e.preventDefault()

    const Title = e.target.Title.value;
    const Marks = e.target.Marks.value;
    const ImgUrl = e.target.ImgUrl.value;
    const Deadline = e.target.Deadline.value;
    const Difficulty = e.target.Difficulty.value;
    const Description = e.target.Description.value;
    const createData = {
      Title,
      Marks,
      ImgUrl,
      Deadline,
      Difficulty,
      Description,
      ownerEmail : user?.email
    }
    
    fetch("http://localhost:5000/assignments", {
      method: "POST", 
      headers: {
          'content-type': 'application/json',
      }, 
      body: JSON.stringify(createData),
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.insertedId){
        swal("Good job!", "You clicked the button!", "success");
      }
  });

};

    
    console.log(user)
    return (
        <div>
            <div className="hero min-h-screen ">
    <div className="card flex-shrink-0 w-full shadow-2xl bg-divColor">
      <form className="card-body" onSubmit={handleCreate}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="Title" placeholder="Assignment Title" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="text" name="Marks" placeholder="Assignment Marks" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbral Url</span>
          </label>
          <input type="text" name="ImgUrl" placeholder="Assignment Thumbral Url" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Deadline</span>
          </label>
          <input type="date" name="Deadline" className="input input-bordered" required />
        </div>
      </div>
      <select name="Difficulty" id="Difficulty" className="font-bold text-xl bg-buttonColor rounded-md">
                <option value="hard">hard</option>
                <option value="medium">medium</option>
                <option value="easy">easy</option>
                </select>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea className="rounded-lg" name="Description" id="" cols="30" rows="5" required></textarea>
        </div>
        <div className="form-control mt-6 flex ">
         
            <button className="btn btn-secondary ">Create</button>
        
        </div>
      </form>
      <div className="form-control flex mx-7 mb-5 ">
         
         <button className="btn btn-success bg-buttonColor">cancle</button>
     
     </div>
    </div>
  </div>
</div>
        
    );
};

export default CreateAssignment;
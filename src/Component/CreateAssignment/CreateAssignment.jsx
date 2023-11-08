import { useContext } from "react";
import { AutContext } from "../Contex/ContexApi";


const CreateAssignment = () => {
    const { user } = useContext(AutContext);

    const handleCreate =(e)=>{
      e.preventDefault()

    const title = e.target.title.value;
    const marks = e.target.marks.value;
    const imgUrl = e.target.imgUrl.value;
    const date = e.target.date.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const createData = {
      title,
      marks,
      imgUrl,
      date,
      category,
      description,
      Owneremail : user?.email
    }
    
    fetch("http://localhost:5000/createAssignment", {
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
          alert('service book successfully')
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
          <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="text" name="marks" placeholder="Assignment marks" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbral Url</span>
          </label>
          <input type="text" name="imgUrl" placeholder="Assignment Thumbral Url" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
      </div>
      <select name="category" id="category" className="font-bold text-xl bg-buttonColor rounded-md">
                <option value="hard">hard</option>
                <option value="medium">medium</option>
                <option value="easy">easy</option>
                </select>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea className="rounded-lg" name="description" id="" cols="30" rows="5" required></textarea>
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
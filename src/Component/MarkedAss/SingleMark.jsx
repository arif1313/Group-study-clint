import swal from "sweetalert";
import getFormData from "../../utilities/getFormData";
import { useState } from "react";

const SingleMark = ({ submition }) => {
    console.log(submition);
    const [click, setClick] = useState(false)
    const [gain_mark, setgain_mark]=useState('');
    const { _id, ownerEmail, submitLink, submiedMail, submitionTime, submitionAssId, Title, Marks, Description, Deadline, ObtainMark } = submition;
    const handleMark = (e) => {
        e.preventDefault()
      setgain_mark(e.target.ObtainMark.value);
        const updatedData = getFormData(e);
        console.log(updatedData);
        fetch(`http://localhost:5000/submition/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedData),

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal('updated succesfully')

                    // updata state
                }
            })
        e.target.reset();
        setClick(true)

    }
    return (
        <div className="mb-7">
            <div className="card  bg-mainTextcolor shadow-xl">
                <div className="card-body">
                    <div className="sm:flex-none md:flex justify-between px-12 ">
                        <div className="space-y-3 text-xl text-buttonColor">
                        Assignment link:
                            <div className="overflow-auto w-96">
                                
                         <a className="text-[#FFFF00] underline " href={submitLink}>{submitLink}</a>

                            </div>
                            <p >assignment Title : {Title}</p>
                            <p>Assignment Id : {submitionAssId}</p>
                            <p>Submited by : {submiedMail}</p>
                            <p>Submited Dathline : {Deadline}</p>
                            <p>Submited on : {submitionTime}</p>
                            <p>Total Mark : {Marks}</p>
                            {
                              (ObtainMark||gain_mark)&&<p className="text-divColor font-bold">Obtain Mark : <span className="text-2xl text-[#FFFF00]"> {ObtainMark?ObtainMark:gain_mark}</span> </p>
                                }
                        </div>

                        <div>
                            <form className=" " onSubmit={handleMark} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-neutral-50 font-bold">Mark</span>
                                    </label>
                                    <input type="text" name="ObtainMark" placeholder="give mark here" className="input input-bordered border-buttonColor text-mainTextcolor " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-neutral-50 font-bold">FeetBack</span>
                                    </label>
                                    <textarea className="rounded-lg text-mainTextcolor p-3" name="Description" id="" cols="30" rows="3" required></textarea>
                                </div>
                                <div className="form-control mt-6 flex ">
                                    { click===false&&
                                        <div >
                                            {!ObtainMark && <button className="btn btn-secondary ">give mark</button>}
                                        </div>
                                    }
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default SingleMark;
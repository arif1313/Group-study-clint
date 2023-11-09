

const SingleMark = ({ submition }) => {
    console.log(submition);
    const { _id, ownerEmail, submitLink, submiedMail, submitionTime, submitionAssId, Title, Marks, Description, Deadline } = submition;
    const handleMark
    return (
        <div className="space-y-7">
            <div className="card  bg-mainTextcolor shadow-xl image-full">
                <div className="card-body">
                    <div className="flex justify-around">
                        <div className="space-y-3 text-xl">
                            <h2 className="card-title">{submitLink}</h2>
                            <p>assignment Title : {Title}</p>
                            <p>Assignment Id : {submitionAssId}</p>
                            <p>Submited by : {submiedMail}</p>
                            <p>Submited Dathline : {Deadline}</p>
                            <p>Submited on : {submitionTime}</p>
                            <p>Total Mark : {Marks}</p>
                        </div>

                        <div>
                            <form className=" " onSubmit={handleMark} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-neutral-50 font-bold">Mark</span>
                                    </label>
                                    <input type="text" name="name" placeholder="give mark here" className="input input-bordered border-buttonColor " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-neutral-50 font-bold">FeetBack</span>
                                    </label>
                                    <textarea className="rounded-lg" name="Description" id="" cols="30" rows="3" required></textarea>
                                </div>
                                <div className="form-control mt-6 flex ">

                                    <button className="btn btn-secondary ">give mark</button>

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
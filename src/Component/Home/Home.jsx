// import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Assignmentcard from "../AssignmentCard/Assignmentcard";
import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";



const Home = () => {
    const { user } = useContext(AutContext);
    const usermail = user?.email;
    console.log('usermail is ', usermail);
    const [assignments, setAsssignmen] = useState([]);
    // const assignments= useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/assignments')
            .then(res => res.json())
            .then(data => setAsssignmen(data))
    }, [])

    const handleDelete = (id, ownerEmail) => {

        if (usermail === ownerEmail) {
            const procced = confirm('are you sure to delete? ')
            if (procced) {
                fetch(`http://localhost:5000/assignments/${id}`,
                    {
                        method: 'DELETE'

                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            swal('delete succes')
                            const remaining = assignments.filter(assignment => assignment._id !== id)
                            setAsssignmen(remaining);
                        }
                    })

            }
        }
        else {
            swal('you can not delete it ')
        }

    }
    const handleupdate = (id, ownerEmail) => {
        fetch(`http://localhost:5000/assignments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ Marks:'70' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal('updated succesfully')
                    const remaining = assignments.filter(assignment => assignment._id !== id)
                    const updated =assignments.find(assignment=>assignment._id == id)
                    updated.Marks ='70'
                    const newAssignment = [updated,...remaining]
                    setAsssignmen(newAssignment);

                }
            })

    }

    // console.log('my data is ',allassignments)


    return (
        <div>
            <div className="flex">
                <select name="category" id="category" className="font-bold text-xl bg-buttonColor rounded-md">
                    <option value="hard">hard</option>
                    <option value="medium">medium</option>
                    <option value="easy">easy</option>

                </select>
                <div className="form-control w-full">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <button className="btn btn-secondary bg-buttonColor ml-4 text-mainTextcolor">seacch</button>

            </div >
            {
                assignments.map(assignment => <Assignmentcard key={assignment._id} Assignment={assignment} handleDelete={handleDelete} handleupdate={handleupdate} ></Assignmentcard>)
            }
        </div>
    );
};

export default Home;
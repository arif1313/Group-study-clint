import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";
import Takendata from "../SingleTalbe/Takendata";

import swal from "sweetalert";


const TakenAssignment = () => {
    const { user } = useContext(AutContext);
    const [takeassignment, setTakenAssignment] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/mytakenAssignment?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setTakenAssignment(data));
    }, [user]);


    const handleSubmit = (id,setClick) => {
        setClick(true);
        fetch(`http://localhost:5000/mytakenAssignment/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ Status: 'submited' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                //   ljdojf
                const remaining = takeassignment.filter(take => take._id!==id);
                const updated = takeassignment.find(take=> take._id===id)
                updated.Status = 'submited'
                const newassignment = [updated, ...remaining];
                setTakenAssignment(newassignment)
                }

            })
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-buttonColor text-lg font-bold text-mainTextcolor">
                        <tr>

                            <th>Title</th>
                            <th>DateLine</th>
                            <th>Total mark</th>
                            <th> our mark</th>
                            <th>Status </th>
                            <th></th>
                        </tr>
                    </thead>
                    {takeassignment.length > 0 ?

                        takeassignment.map(taken => <Takendata key={taken._id} taken={taken} handleSubmit={handleSubmit}></Takendata>)
                        : <h1 className="text-2xl font-bold text-center text-mainTextcolor mt-16">Your Taken Assingnment is Emtty</h1>}



                </table>
            </div>
        </div>
    );
};

export default TakenAssignment;
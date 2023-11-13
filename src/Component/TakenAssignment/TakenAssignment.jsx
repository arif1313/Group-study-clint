import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";
import Takendata from "../SingleTalbe/Takendata";
import Hearo from "../Hero Layout/Hearo";



const TakenAssignment = () => {
    const { user } = useContext(AutContext);
    const [takeassignment, setTakenAssignment] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/mytakenAssignment?email=${user?.email}`,{credentials:'include'})
            .then((res) => res.json())
            .then((data) => setTakenAssignment(data));
    }, [user]);


    const handleSubmit = (id) => {
     
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
            localStorage.removeItem('isAssignmentSubmitted');
         
    }


    return (
        <div>
            
                 <Hearo></Hearo>
            <div className="overflow-x-auto">
                <table className="table sm:mx-auto">
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
                    {takeassignment.length > 0 &&

                        takeassignment.map(taken => <Takendata key={taken._id} taken={taken} handleSubmit={handleSubmit}></Takendata>)
                     }



                </table>
            </div>
        </div>
    );
};

export default TakenAssignment;
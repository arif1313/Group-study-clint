import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";
import SingleMark from "./SingleMark";



const Marked = () => {
    const { user} = useContext(AutContext);
    const [submitons, setSubmitions]= useState([]);
   
    useEffect(() => {
       
        fetch(`http://localhost:5000/submition?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setSubmitions(data));
    }, [user]);

   
   
    return (
        <div>
            <h2 className="text-3xl font-bold  text-center p-5">Chack Assignment</h2>
            {
              submitons.length===0 && <h2 className="text-3xl font-bold  text-center p-5">No assignment yet submited</h2>
            }
    
           {
            submitons.map(submition=><SingleMark key={submition._id} submition={submition}></SingleMark>)
            }

        </div>
    );
};

export default Marked;
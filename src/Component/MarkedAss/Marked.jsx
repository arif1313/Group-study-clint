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
    console.log(submitons);
    return (
        <div>
            data : {submitons.length}
           {
            submitons.map(submition=><SingleMark key={submition._id} submition={submition}></SingleMark>)
            }
        </div>
    );
};

export default Marked;
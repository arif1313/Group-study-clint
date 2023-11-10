import { useContext, useEffect, useState } from "react";
import { AutContext } from "../Contex/ContexApi";
import SingleMark from "./SingleMark";
// import axios from "axios";


const Marked = () => {
    const { user} = useContext(AutContext);
    const [submitons, setSubmitions]= useState([]);
   
    useEffect(() => {
        // axios.get(url,{withCredentials: true })
        // .then(res=>{
        //     setSubmitions(res.data)
        // })
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
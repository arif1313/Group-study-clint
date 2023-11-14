
import FeatureCard from "./FeatureCard";
import { useEffect, useState } from "react";


const Features = () => {
    const[ allFeatures, setallfeture] = useState([])
    useEffect(()=>{
        fetch('https://goup-server.vercel.app/features',{credentials:'include'})
        .then(res=>res.json())
        .then(data=>setallfeture(data))
    },[])

    return (
        <div> <h1 className="text-mainTextcolor font-bold text-center text-2xl my-12">Features</h1>
        <div className="my-7 grid sm:grid-cols-1 md:grid-cols-2 gap-10 ">
           

            {
              allFeatures.map(featear => <FeatureCard key={featear._id} featear={featear} ></FeatureCard>)  
            }
        </div>
        </div>
    );
};

export default Features;
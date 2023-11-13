
import FeatureCard from "./FeatureCard";
import { useEffect, useState } from "react";


const Features = () => {
    const[ allFeatures, setallfeture] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/features')
        .then(res=>res.json())
        .then(data=>setallfeture(data))
    },[])

    return (
        <div className="my-7 grid sm:grid-cols-1 md:grid-cols-2 gap-10 ">

            {
              allFeatures.map(featear => <FeatureCard key={featear._id} featear={featear} ></FeatureCard>)  
            }
        </div>
    );
};

export default Features;
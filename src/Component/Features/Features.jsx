import { useLoaderData } from "react-router-dom";
import FeatureCard from "./FeatureCard";


const Features = () => {
    const allFeatures = useLoaderData();

    return (
        <div className="my-7 grid sm:grid-cols-1 md:grid-cols-2 gap-10 ">

            {
              allFeatures.map(features=><FeatureCard key={features._id} features={features}></FeatureCard>)  
            }
        </div>
    );
};

export default Features;
import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";


const Feature = () => {

    const [features, setFeatures] = useState([]);
    console.log(features)

    useEffect(() =>{
        fetch('http://localhost:5000/features')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    return (
        <div className="my-14">
            <div className=" md:w-3/4 lg:w-1/2 mx-auto">
              <h1 className="text-4xl font-bold text-center">Discover Study Online with its Awesome Features</h1>
              <p className="text-base font-medium text-center">Join motivated students from all over the world to boost your productivity and find your study flow.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    features?.map(feature => <FeatureCard 
                        key={feature._id}
                        feature={feature}
                        
                        ></FeatureCard>)

                }
            </div>
            
        </div>
    );
};

export default Feature;
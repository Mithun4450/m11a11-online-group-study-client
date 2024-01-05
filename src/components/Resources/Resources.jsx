import { useEffect, useState } from "react";
import ResourceCard from "../ResourceCard/ResourceCard";


const Resources = () => {

    const [resources, setResources] = useState([]);
    console.log(resources)

    useEffect(() =>{
        fetch('https://m11a11-online-group-study-server.vercel.app/resources')
        .then(res => res.json())
        .then(data => setResources(data))
    },[])

    return (
        <div className="my-24" id="resources">
            <div className=" md:w-3/4 lg:w-1/2 mx-auto" >
                    <h1 className="text-4xl font-bold text-center mb-5">Knowledge Hub</h1>
                    <p className="text-base font-medium text-center mb-10">Explore Diverse Study Resources & Empower Your Learning Journey with Comprehensive Material Across Subjects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    resources.map(resource => <ResourceCard key={resource._id}
                    resource={resource}
                    ></ResourceCard>)
                }
            </div>
        </div>
    );
};

export default Resources;
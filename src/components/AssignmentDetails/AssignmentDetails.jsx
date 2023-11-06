import { useLoaderData } from "react-router-dom";


const AssignmentDetails = () => {
    const assignment = useLoaderData();
    const {title, photo, marks, difficulty, date, description} = assignment;
    return (
        <div className="hero min-h-screen bg-base-200 my-14">
            <div className="hero-content flex-col ">
                <img src={photo} className=" rounded-lg shadow-2xl w-full h-[60vh] " />
                <div>
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl font-medium text-justify mb-2"> {description}</p>
                <p className="text-xl  text-left mb-2"> <span className="font-bold">Total Marks: </span>{marks}</p>
                <p className="text-xl  text-left mb-2"> <span className="font-bold">Due Date: </span>{date}</p>
                <p className="text-xl  text-left mb-5"> <span className="font-bold">Difficulty level of assignment: </span>{difficulty}</p>
                
                <button className="btn btn-secondary">Take Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;
import { Link } from "react-router-dom";


const AssignmentCard = ({assignment, handleDelete}) => {

    const {_id, creatorEmail, title, photo, marks, difficulty, date, description} = assignment;
    

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className=" w-full h-44" src={photo} alt="Image of Assignment" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p> <span className="font-bold">Total Marks: </span>{marks}</p>
                    <p> <span className="font-bold">Difficulty level of assignment: </span>{difficulty}</p>
                    <div className="card-actions justify-center">
                         <Link to={`/assignmentDetails/${_id}`}><button className="btn btn-secondary btn-sm">View Assignment</button></Link>
                         <Link to={`/updateAssignment/${_id}`}><button className="btn btn-secondary btn-sm">Update Assignment</button></Link>
                         <button onClick={() =>handleDelete(_id, creatorEmail)} className="btn btn-secondary btn-sm">Delete Assignment</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AssignmentCard;
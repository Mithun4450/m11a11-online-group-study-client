import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyAssignments = () => {

    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const userEmail = user?.email;

    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/submittedAssignments/my?userEmail=${userEmail}`, { credentials: 'include'})
        .then(res =>res.json())
        .then(data=> setSubmittedAssignments(data))
    },[userEmail])

    console.log(submittedAssignments)


    return (
        <div>
            <h1 className="text-3xl text-center font-bold mt-8 mb-5">These are all Assignments you have submitted</h1>

            <div className="overflow-x-auto w-[400px] md:w-[700px] lg:w-[1000px] mx-auto mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-base text-center ">
                        <th></th>
                        
                        <th>Assignment Title</th>
                        <th>Assignment Status</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                        <th>Feedback from Examiner</th>
                        
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}

                    {
                        submittedAssignments?.map(submittedAssignment => <tr key={submittedAssignment._id} className="text-sm text-center ">
                            <th></th>
                            
                            <td>{submittedAssignment.title}</td>
                            <td >{submittedAssignment.AssignmentStatus}</td>
                            <td>{submittedAssignment.marks}</td>
                            <td>{submittedAssignment.obtainedMarks || ""}</td>
                            <td>{submittedAssignment.feedback || ""}</td>
                            
                        </tr>)
                    }
                    
                   
                    </tbody>
                </table>
                </div>
            
        </div>
    );
};

export default MyAssignments;
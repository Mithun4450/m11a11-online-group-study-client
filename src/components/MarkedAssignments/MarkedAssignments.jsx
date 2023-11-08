
import { useEffect, useState } from "react";


const MarkedAssignments = () => {


    const [markedAssignments, setMarkedAssignments] = useState([]);

    useEffect(() =>{
        fetch('https://m11a11-online-group-study-server.vercel.app/submittedAssignments/mark?AssignmentStatus=Completed', { credentials: 'include'})
        .then(res =>res.json())
        .then(data=> setMarkedAssignments(data))
    },[])

    console.log(setMarkedAssignments)

    return (
        <div>
            <h1 className="text-3xl text-center font-bold mt-8 mb-5">Completed Assignments with their Marks</h1>

            <div className="overflow-x-auto w-[400px] md:w-[700px] lg:w-[1000px] mx-auto mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-base text-center ">
                        <th></th>
                        <th> Assignment Status</th>
                        <th>Assignment Title</th>
                        <th>Submitted by</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                        <th>Feedback from Examiner</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}

                    {
                        markedAssignments?.map(markedAssignment => <tr key={markedAssignment._id} className="text-sm text-center ">
                            <th></th>
                            <td className="text-green-600 font-bold">{markedAssignment.AssignmentStatus}</td>
                            <td>{markedAssignment.title}</td>
                            <td>{markedAssignment.userEmail}</td>
                            <td>{markedAssignment.marks}</td>
                            <td>{markedAssignment.obtainedMarks}</td>
                            <td>{markedAssignment.feedback}</td>
                            
                            
                        </tr>)
                    }
                    
                   
                    </tbody>
                </table>
                </div>
            
        </div>
    );
};

export default MarkedAssignments;
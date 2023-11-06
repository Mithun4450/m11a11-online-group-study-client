import { useEffect, useState } from "react";


const SubmittedAssignment = () => {

    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/submittedAssignments?AssignmentStatus=Pending')
        .then(res =>res.json())
        .then(data=> setSubmittedAssignments(data))
    },[])

    console.log(submittedAssignments)

    return (
        <div>
            <h1 className="text-3xl text-center font-bold mt-8 mb-5">All Submitted Assignments waiting for Marking</h1>

            <div className="overflow-x-auto w-[400px] md:w-[700px] lg:w-[1000px] mx-auto mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-xl text-center ">
                        <th></th>
                        <th>Assignment Title</th>
                        <th>Submitted by</th>
                        <th>Total Marks</th>
                        <th>Examinee Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}

                    {
                        submittedAssignments?.map(submittedAssignment => <tr key={submittedAssignment._id} className="text-base text-center ">
                            <th></th>
                            <td>{submittedAssignment.title}</td>
                            <td>{submittedAssignment.userEmail}</td>
                            <td>{submittedAssignment.marks}</td>
                            <td>{submittedAssignment.examineeName}</td>
                            <td className="text-red-600 font-bold">{submittedAssignment.AssignmentStatus}</td>
                            <td><button className="btn btn-accent">Give Mark</button></td>
                        </tr>)
                    }
                    
                   
                    </tbody>
                </table>
                </div>
            
        </div>
    );
};

export default SubmittedAssignment;
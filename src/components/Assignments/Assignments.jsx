import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import { useEffect, useState } from "react";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    // const assignments = useLoaderData();
    // console.log(assignments)

   const handleFilterByDifficulty = e =>{
        e.preventDefault();
        const difficulty = e.target.difficulty.value;

        if(difficulty === "All"){
            
            fetch('http://localhost:5000/assignments/all')
            .then(res =>res.json())
            .then(data => setAssignments(data))
            
        }
        else{
            fetch(`http://localhost:5000/assignments?difficulty=${difficulty}`)
            .then(res =>res.json())
            .then(data => setAssignments(data))
        }
   }

    return (
        <div>
            <div className=" my-8">
                <form onSubmit={handleFilterByDifficulty} className="flex justify-center items-center gap-5" >
                   
                    <select className="text-xl"   name="difficulty" id="difficulty">
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>

                    <div>
                        <button className="btn btn-secondary">Filter by Difficulty Level</button>
                    </div>
                </form>
                
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    assignments.map(assignment => <AssignmentCard 
                        key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)
                }
           </div>
            
        </div>
    );
};

export default Assignments;
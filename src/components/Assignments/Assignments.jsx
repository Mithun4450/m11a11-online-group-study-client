// import { useLoaderData } from "react-router-dom";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import { useContext, useEffect, useState } from "react";
import swal from 'sweetalert';
import { AuthContext } from "../AuthProvider/AuthProvider";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const userEmail = user?.email;

    // const assignments = useLoaderData();
    // console.log(assignments)

    useEffect(() =>{
        fetch('http://localhost:5000/assignments/all')
            .then(res =>res.json())
            .then(data => setAssignments(data))
    },[])

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


   const handleDelete = (id, creatorEmail) =>{

    if(userEmail !== creatorEmail){
      return swal("Sorry!", " You can not delete this assignment because you are not creator of it!");
    }
    else{
        const proceed = confirm("Are you sure you want to delete it?")
        if(proceed){
            fetch(`http://localhost:5000/assignments/${id}`,{
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    swal("Done!", "You have successfully deleted your assignment!", "success");
                    const remaining = assignments.filter(assignment => assignment._id !== id);
                    setAssignments(remaining);
                }
            })
        }}
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
                        handleDelete = {handleDelete}
                    ></AssignmentCard>)
                }
           </div>
            
        </div>
    );
};

export default Assignments;
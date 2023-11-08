import { useLoaderData, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../AuthProvider/AuthProvider';

const UpdateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const userEmail = user?.email;

    const navigate = useNavigate();

    const assignment = useLoaderData();
    const creatorEmail = assignment.creatorEmail;
    

    const handleAssignmentUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const date = form.date.value;
        const description = form.description.value;
        
        console.log(title, photo, marks, difficulty, date, description)

        const updatedAssignment = {title, photo, marks, difficulty, date, description};

        if(userEmail !== creatorEmail){
            return swal("Sorry!", "You can not update this assignment because you are not the creator of it!");
        }
        else{
            fetch(`https://m11a11-online-group-study-server.vercel.app/assignments/assignmentWise/${assignment._id}`, {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedAssignment)
            })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    
    
                    if(data.modifiedCount > 0){
                        form.reset();
                        swal("Good job!","You have successfully updated your assignment!", "success");

                        navigate("/assignments");
    
                       
                    }
                    
                })
    
            }

        }

 

    return (
        <div className="hero min-h-screen  my-14" >
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                       
            </div>
            <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleAssignmentUpdate} className="card-body ">
                <h1 className='text-3xl text-center font-bold mb-8'>You can update your assignment here!!!</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <div className="form-control ">

                       <label className="label">
                            <span className="label-text">Assignment Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={assignment.title} placeholder="Title" className="input input-bordered"  />
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Assignment Image</span>
                        </label>
                        <input type="text" name="photo" defaultValue={assignment.photo} placeholder="Image URL" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control">
                         <label className="label">
                            <span className="label-text">Assignment Marks</span>
                        </label>
                        <input type="text" name="marks" defaultValue={assignment.marks} placeholder="Total marks" className="input input-bordered"  />
                    </div>
                   
                   
                   
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <label className="label">
                            <span className="label-text">Choose difficulty level of Assignment</span>
                        </label>
                        <select name="difficulty" defaultValue={assignment.difficulty} id="difficulty">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        </select>
                   </div>
                   <div className="form-control">
                        <label className="label">
                                <span className="label-text">Pick Assignment Due Date</span>
                        </label>
                        <DatePicker name='date' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                
                
                <div className="form-control">
                    <label className="label">
                            <span className="label-text">Assignment Description</span>
                    </label>
                    <textarea className="border p-4 rounded-lg" name="description" defaultValue={assignment.description} placeholder="Write assignment description here...." id="" cols="20" rows="5"></textarea>
                   
                </div>
                

                <div className="form-control mt-6">
                <button className="btn btn-secondary lg:w-1/2 mx-auto">Update Assignment</button>
                </div>
            </form>
            </div>
        </div>

       
    </div>
    
    );
};

export default UpdateAssignment;
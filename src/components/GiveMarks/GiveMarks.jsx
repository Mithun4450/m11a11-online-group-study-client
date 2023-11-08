
import swal from 'sweetalert';
import { useLoaderData, useNavigate } from 'react-router-dom';

const GiveMarks = () => {
    const submittedAssignment = useLoaderData();
    console.log(submittedAssignment)
    const {_id, pdfLink, quickNote, title, marks} = submittedAssignment;
    const navigate = useNavigate();
    
    const handleAssignmentMarking = e =>{
        e.preventDefault();
        const form = e.target;
        const obtainedMarks = form.obtainedMarks.value;
        const feedback = form.feedback.value;
        console.log(obtainedMarks, feedback);
        const assignmentStatus = "Completed";

    

        fetch(`https://m11a11-online-group-study-server.vercel.app/submittedAssignments/mark/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({ obtainedMarks:obtainedMarks, feedback:feedback, AssignmentStatus:assignmentStatus})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
      
                swal("Good job!","You have given marks to assignment successfully!", "success");
                form.reset();
                navigate("/markedAssignments")
            }
        })
        
      
    }

    return (
        <div className="hero min-h-screen  my-14" >
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                       
            </div>
            <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleAssignmentMarking} className="card-body ">
                <h1 className='text-3xl text-center font-bold mb-8'>Give marks to the assignment here!!!</h1>
                <h1 className='text-xl font-bold mb-8'><span>Assignment Title:  </span>{title}</h1>
                <p className='text-xl mb-8'><span className='font-bold'> Google drive link of PDF:  </span><span className='text-sky-700 underline'><a href={pdfLink} rel="noreferrer" target="_blank">{pdfLink}</a></span></p>
                <p className='text-xl mb-8'><span className='font-bold'> Quick Note given by Examinee:  </span>{quickNote}</p>
                <p className='text-xl mb-8'><span className='font-bold'> Total Marks:  </span>{marks}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                   
                    <div className="form-control ">
                         <label className="label">
                            <span className="label-text text-xl font-bold">Obtained Marks</span>
                        </label>
                        <input type="text" name="obtainedMarks" placeholder="Give marks here..." className="input input-bordered"  />
                    </div>
                   
                   
                   
                </div>

               
                <div className="form-control">
                    <label className="label ">
                            <span className="label-text text-xl font-bold"> Feedback from Examiner</span>
                    </label>
                    <textarea className="border p-4 rounded-lg" name="feedback" placeholder="Write feedback here...." id="" cols="20" rows="5"></textarea>
                   
                </div>
                

                <div className="form-control mt-6">
                <button className="btn btn-secondary lg:w-1/2 mx-auto">Submit Marks</button>
                </div>
            </form>
            </div>
        </div>

       
    </div>
    
    );
};



export default GiveMarks;
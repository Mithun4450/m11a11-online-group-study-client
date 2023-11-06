
import swal from 'sweetalert';
import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const SubmissionForm = () => {

    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    const examineeName = user?.displayName;
    console.log(userEmail, examineeName );

    const assignment = useLoaderData();
    const {title, marks, photo} = assignment;
    console.log(title, marks, photo);

    const AssignmentStatus = "Pending";
    

    const handleAssignmentSubmission = e =>{
        e.preventDefault();
        const form = e.target;
        const pdfLink = form.pdfLink.value;
        const quickNote = form.quickNote.value;
        console.log(userEmail, pdfLink, quickNote)

        const submittedAssignment = {userEmail, title, marks, photo, examineeName, pdfLink, quickNote, AssignmentStatus};
        
        fetch('http://localhost:5000/submittedAssignments', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(submittedAssignment)
      
          })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
      
              if(data.insertedId){
                swal("Good job!","You have successfully submitted assignment!", "success");
                form.reset();
              }
            })
    }

    return (
        <div className="hero min-h-screen  my-14" >
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                       
            </div>
            <div className="card flex-shrink-0 w-full ">
            <form onSubmit={handleAssignmentSubmission} className="card-body ">
                <h1 className='text-3xl text-center font-bold mb-8'>Assignment Submission Form</h1>
             
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Assignment PDF Link:</span>
                    </label>
                    <input type="text" name="pdfLink" placeholder="Give Assignment PDF Link here" className="input input-bordered" />
                            
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quick Note Text:</span>
                    </label>
                    <textarea className="border p-4 rounded-lg" name="quickNote" placeholder="Write quick note here...." id="" cols="20" rows="5"></textarea>
                   
                </div>
                

                <div className="form-control mt-6">
                <button className="btn btn-secondary lg:w-1/2 mx-auto">Submit Assignment</button>
                </div>
            </form>
            </div>
        </div>

       
    </div>
    
    );
};



export default SubmissionForm;
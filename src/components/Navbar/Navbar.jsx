import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Navbar = () => {

    const navLinks = <>
        
        <li>
            <NavLink to="/" className=" dark:text-gray-500 hover:text-blue-600 hover:underline ">Home</NavLink>
        </li>
        <li>
            <NavLink to="/assignments" className=" dark:text-gray-500 hover:text-blue-600 hover:underline ">Assignments</NavLink>
        </li>
        <li>
            <NavLink to="/createAssignment" className=" dark:text-gray-500 hover:text-blue-600 hover:underline ">Create Assignment</NavLink>
        </li>
        <li>
            <NavLink to="/myAssignments" className=" dark:text-gray-500 hover:text-blue-600 hover:underline ">My Assignments</NavLink>
        </li>
        <li>
            <NavLink to="/submittedAssignments" className=" dark:text-gray-500 hover:text-blue-600 hover:underline ">Submitted Assignments</NavLink>
        </li>

        
    </>

    const { logOut, user} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }

   

    return (
        <div>
            
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="flex items-center">
                        <img src="/studylogo.png" className="h-10 mr-3" alt="Study Online Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Study Online</span>
                    </a>
                    <div className="flex items-center">

                    {
                        user? <>
                        {/* <p className="uppercase">{user.displayName}</p> */}
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">
                            <div className="w-10 rounded-full">

                            {
                            user.photoURL? <img src={user.photoURL} /> : <img src=""></img>

                            }

                            
                            </div>
                        </label>
                        
                            <NavLink onClick={handleLogOut} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline mr-4 ">Logout</NavLink>
                        </>: <>
                            <NavLink to="/register" className="text-sm mr-4  text-blue-600 dark:text-blue-500 hover:underline">Register</NavLink>
                            <NavLink to="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</NavLink>
                        
                        </>
                    
                    }
                        
                        
                        
                        
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-col justify-start md:flex-row md:items-center   font-medium   space-y-2 md:space-x-8 text-base">
                           

                        {
                            navLinks
                        }

                        </ul>
                    </div>
                </div>
            </nav>

            
        </div>
    );
};

export default Navbar;
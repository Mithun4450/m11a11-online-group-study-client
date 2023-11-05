import img2 from '../../assets/images/img2.png'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='my-14 p-6'>
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2 ">
                    <img className='w-full rounded-lg ' src={img2}></img>
                    
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body ">
                        <h1 className="text-2xl font-bold">Please register here!</h1>

                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </form>

                    <p className="text-center pb-10">Already registered? Please <span className="text-blue-700 underline"><Link to="/login">Login</Link></span> </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;
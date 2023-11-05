import img1 from '../../assets/images/img1.png'
import { FcGoogle  } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
    return (
        <div className='my-14 p-6'>
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div>
                            <img className='w-full rounded-lg ' src={img1}></img>
                        </div>
                        
                        <div>
                            <div className="form-control mt-6">
                                    <button  className="btn btn-outline btn-secondary"> <span><FcGoogle className="text-2xl"></FcGoogle></span>Login with Google</button>
                            </div>
                            <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-secondary"><span><BsGithub className="text-2xl text-black "></BsGithub></span>Login with GitHub</button>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                            <h1 className='text-3xl font-bold'>Please login here!</h1>
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
                                <button className="btn btn-secondary">Login</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
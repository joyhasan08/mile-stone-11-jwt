import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text">Confirmed Password</span>
                        </label>
                        <input name="password" type="password" placeholder="repeat password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={"/login"} className="label-text-alt link link-hover">Login Here</Link>

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
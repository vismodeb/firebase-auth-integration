import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-black text-center text-2xl font-bold mt-4">
          Reg<span className="text-yellow-500">ister</span>
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
          <div className="text-center">
            <p className="label">
              Already have an Account?{" "}
              <Link to="/login" className="hover:text-black duration-300">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

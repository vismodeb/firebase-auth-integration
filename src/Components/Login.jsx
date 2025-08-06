import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // login user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        "ERROR", error.message;
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-black text-center text-2xl font-bold mt-4">
          lo<span className="text-yellow-500">gin</span>
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full input input-bordered"
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
              className="w-full input input-bordered"
            />
          </div>
          <div className="text-end">
            <Link className="label hover:text-black duration-300">
              Forgot password?
            </Link>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <div className="text-center">
            <p className="label">
              Have any Account?{" "}
              <Link to="/register" className="hover:text-black duration-300">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

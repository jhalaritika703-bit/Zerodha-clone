import { useState, useEffect } from "react";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = `https://zerodha-clone-a1sx.vercel.app/?token=${token}`;
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://zerodha-clone-8f4z.onrender.com/api/auth/signup",
        user
      );

      const token = res.data.token;

      // Save JWT token
      localStorage.setItem("token", token);

      alert("Signup Successful!");

      // Clear form
      setUser({
        username: "",
        email: "",
        password: "",
      });

      // Redirect to Dashboard with token
      window.location.href = `https://zerodha-clone-a1sx.vercel.app/?token=${token}`;
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Signup Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Create Account</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
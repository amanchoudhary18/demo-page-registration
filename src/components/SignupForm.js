import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { fullName, email, password, confirmPassword });
  };

  return (
    <div className="container-fluid pt-md-5 pt-3">
      <div className="row p-0">
        <div className="col-12 col-md-6 p-0">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control rounded my-2"
                id="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control rounded my-2"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control rounded my-2"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group pb-3">
              <input
                type="password"
                className="form-control rounded my-2"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <PrimaryButton
              title="Create Account"
              backgroundColor="#E9484A"
              color="white"
            />

            <div className="separator py-3">
              <span className="text-xs-poppins text-secondary px-3">Or</span>
            </div>

            <p className="text-sm-poppins text-secondary">
              Already a member?{" "}
              <Link to="/" className="text-secondary">
                Login
              </Link>
            </p>

            <SecondaryButton title="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

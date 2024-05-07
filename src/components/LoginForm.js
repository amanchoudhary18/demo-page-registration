import React, { useState } from "react";
import { Link } from "react-router-dom";
import google_svg from "../assets/Google svg.png";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
  };

  return (
    <div className="container-fluid pt-md-5 pt-3">
      <div className="row p-0">
        <div className="col-12 col-md-6 p-0">
          <form onSubmit={handleSubmit}>
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
                className="form-control rounded my-4"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="text-xs-poppins">Forgot Password?</p>

            <PrimaryButton
              title="Submit"
              backgroundColor="#E9484A"
              color="white"
            />

            <SecondaryButton title="Continue with Google" icon={google_svg} />

            <div className="separator py-4">
              <span className="text-xs-poppins text-secondary px-3">Or</span>
            </div>

            <p className="text-sm-poppins text-secondary">
              Not a member?{" "}
              <Link to="/create" className="text-secondary">
                Signup Now
              </Link>
            </p>

            <SecondaryButton title="Create your account" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

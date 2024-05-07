import React, { useState } from "react";
import logo from "../assets/company-logo.png";

import LoginForm from "../components/LoginForm";
import MobileNav from "../components/MobileNav";
import {
  LOGIN,
  OWNER,
  SIDE_COVER_SUBTEXT,
  USER,
  WELCOME_TEXT,
} from "../constants/labels";
const Login = () => {
  const tabs = [USER, OWNER];
  const [selectedTab, setSelectedTab] = useState(USER);

  return (
    <>
      <MobileNav title={LOGIN} />
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-md-block col-md-4 p-0 side-cover ">
            <div className="pt-5 px-5 w-75">
              <img src={logo} alt="logo" />

              <div className="pt-5">
                <p className="text-md-poppins bolder text-white">
                  {WELCOME_TEXT}
                </p>
                <p className="text-sm-roboto text-white">
                  {SIDE_COVER_SUBTEXT}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 p-md-5 p-4">
            <p className="text-lg-roboto bolder pb-5">{LOGIN}</p>

            <div className="pt-2 row">
              <div className="col-12 col-md-5 border rounded row mx-1 p-1">
                {tabs.map((tab) => (
                  <div
                    className={`${
                      selectedTab === tab
                        ? "bg-dark text-white"
                        : "text-secondary"
                    }  col-6 tab text-sm-poppins`}
                    role="button"
                    onClick={() => setSelectedTab(tab)}
                  >
                    <p>{tab}</p>
                  </div>
                ))}
              </div>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

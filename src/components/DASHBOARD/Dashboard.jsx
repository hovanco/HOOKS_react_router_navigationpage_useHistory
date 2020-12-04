import React, { useState, useRef } from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import "./dashboard.css";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

function Dashboard() {
  const { register, handleSubmit, errors, watch, reset } = useForm({});

  const [value, setValues] = useState();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    // c1: data.phone = value
    alert(JSON.stringify({ ...data, phone: value }));
  };

  const onReset = () => {
    setValues("");
    reset("");
  };

  const history = useHistory();

  const navigationToHomePage = () => {
    history.push("/");
  };

  const navigationToAboutPage = () => {
    history.push("/about");
  };

  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="container">
            <div className="required-infor">
              <div className="register-user">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Rain"
                    ref={register({
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
                  {_.get("firstName.type", errors) === "required" && (
                    <p className="p-tag-of-input">This field is required</p>
                  )}
                  {_.get("firstName.type", errors) === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {_.get("firstName.type", errors) === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Ho"
                    ref={register({
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
                  {_.get("lastName.type", errors) === "required" && (
                    <p className="p-tag-of-input">This field is required</p>
                  )}
                  {_.get("lastName.type", errors) === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {_.get("lastName.type", errors) === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}

                  <button
                    type="submit"
                    defaultValue="Submit"
                    className="btn-submit"
                  >
                    SEND
                  </button>
                  <button type="button" className="btn-reset" onClick={onReset}>
                    RESET
                  </button>
                  <button
                    type="button"
                    className="btn-home-dashboard"
                    onClick={navigationToHomePage}
                  >
                    Go Home
                  </button>
                  <button
                    type="button"
                    className="btn-about-dashboard"
                    onClick={navigationToAboutPage}
                  >
                    About
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
export default Dashboard;

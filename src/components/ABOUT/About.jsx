import React, { useState, useRef } from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import "./about.css";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

function About() {
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

  // const navigationToHomePage = () => {
  //   history.push("/");
  // };
  // const navigationToHomePage = () => {
  //   history.replace("/");
  // };
  const navigationToHomePage = () => {
    history.goBack();
  };

  const navigationToDashboardPage = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <Router>
        <div className="wrapper-about">
          <div className="container-about">
            <div className="required-infor-about">
              <div className="register-user-about">
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
                    className="btn-goAbout-about"
                    onClick={navigationToHomePage}
                  >
                    Go Home
                  </button>

                  <button
                    type="button"
                    className="btn-dashboard-about"
                    onClick={navigationToDashboardPage}
                  >
                    Go Dashboard
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
export default About;

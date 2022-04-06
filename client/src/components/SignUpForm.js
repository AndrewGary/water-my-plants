import React, { useState } from "react";
// import * as yup from "yup";
const initialValues = {
  username: "",
  password: "",
  phoneNumber: "",
};

function Register() {
  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (event) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="register-wrapper">
      <h2>
        Get reminded when it’s time to feed that foliage and quench your plant’s
        thirst.
      </h2>
      <form>
        <div className="inputContainer">
          <div className="inputContainer">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
              placeholder="username"
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              onChange={onChange}
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="phoneNumber">Telephone:</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="9151234566"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={formValues.phoneNumber}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

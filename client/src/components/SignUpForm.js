import React, { useState } from "react";
import axios from 'axios';

// import * as yup from "yup";
const initialValues = {
  username: "",
  password: "",
  phoneNumber: "",
};

function Register() {
  const [formValues, setFormValues] = useState(initialValues);
  const [ errorMessage, setErrorMessage ] = useState('');

  const onChange = (event) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('http://localhost:9000/api/auth/register', formValues)
    .then(resp => {
      console.log('inside of then');
      console.log('resp: ', resp);
    })
    .catch(error => {
      setErrorMessage(error.response.data.message);
    })
  }


  return (
    <div className="register-wrapper">
      <h2>
        Get reminded when it’s time to feed that foliage and quench your plant’s
        thirst.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <div className="inputContainer">
            <h3 className="errorMessage">{errorMessage ? `ERROR: ${errorMessage}` : '' }</h3>
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
              type="input"
              placeholder="9151234566"
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

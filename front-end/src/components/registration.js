import React, { useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { connect } from "react-redux";

const Register= (props) => {

    const [credentials, setCredentials] = useState({
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    });

    const [registerNow, setRegisterNow] = useState(false);

    const register = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                if ("token" ? setRegisterNow(true) : null);
                return props.history.push("")
            })
            .catch(error => console.log("registration error",error))
    };

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };


    return (
        <div>
            <form onSubmit={register}>
                <input
                    className="inputs"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    className="inputs"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <input
                      className="inputs"
                      type="password"
                      name="password_confirmation"
                      value={credentials.password}
                      onChange={handleChange}
                  />  
    
                <button>Register</button>
            </form>
        </div>
    );
};

export default connect(state => state, { register })(Register);
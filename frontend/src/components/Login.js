import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    let history = useHistory();
    const host = "https://i-notebook-lyart.vercel.app";
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save the token and redirect
            localStorage.setItem("token", json.authtoken);
            localStorage.setItem("email", credentials.email);
            history.push("/");
            props.showalert("Logged in Successfully", "success");
        } else {
            props.showalert("Invalid Credential", "danger");
        }
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='mt-2' style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input style={{ width: "500px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" value={credentials.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input style={{ width: "500px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="password" className="form-control" onChange={onChange} id="password" name="password" value={credentials.password} />
                </div>
                <button type="submit" className={`btn btn-${props.mode === "dark" ? "primary" : "info"}`}>Submit</button>
            </form>
        </div>
    )
}

export default Login

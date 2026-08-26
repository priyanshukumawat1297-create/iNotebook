import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    let history = useHistory();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save the token and redirect
            localStorage.setItem("token", json.authtoken);
            history.push("/");
            props.showalert("Account Created Successfully", "success");
        } else {
            props.showalert("Invalid Details", "danger");
        }
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='mt-2' style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h2>Create an account to use iNotebook</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input style={{ width: "500px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="text" className="form-control" id="name" name="name" aria-describedby="emailHe" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input style={{ width: "500px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="email" className="form-control" id="email" name="email" aria-describedby="emailHe" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input style={{ width: "500px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input style={{ width: "500px", backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white", color: props.mode === "dark" ? "white" : "black" }} type="password" className="form-control" onChange={onChange} id="cpassword" name="cpassword" minLength={5} required />
                </div>
                <button type="submit" className={`btn btn-${props.mode === "dark" ? "primary" : "info"}`}>Submit</button>
            </form>
        </div>
    )
}

export default Signup

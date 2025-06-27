import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const users = useSelector((state) => state.users.entities);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(users)
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('auth', username)
            console.log('Login Success')
            navigate('/home');
        } else {
            alert("Credenciales Invalidas")
            setUsername("");
            setPassword("");
            console.log('Login Failed')
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card col-md-4 p-4">
                <h3>Acceso</h3>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input className="form-control"
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input className="form-control"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-secondary btn-sm" type="submit">Ingresar</button>
                    <Link className="btn btn-light btn-sm" to="/registro">Registro</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
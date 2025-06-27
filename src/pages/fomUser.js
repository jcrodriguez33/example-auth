import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { add } from "../store/UsersSlice";
const User = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const lastId = useSelector((state) => state.users.entities.length);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: lastId + 1,
            username,
            password
        }
        dispatch(
            add(data)
        )
        alert("El usuario se agrego correctamente")
        navigate("/")
    }
    return (

        <div className="container d-flex justify-content-center align-items-center">
            <div className="card col-md-4 p-4">
                <h3>Registro Usuario</h3>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login:</label>
                        <input className="form-control" required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Login" /><br />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input  className="form-control" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br />
                    </div>
                    <button className="btn btn-secondary btn-sm" type="submit">Guardar</button>
                </form>
            </div>

        </div>
    )
}
export default User

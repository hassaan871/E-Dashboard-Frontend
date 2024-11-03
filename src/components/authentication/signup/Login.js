import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.warn('Email:', email);
        console.warn('Password:', password);

        try {
            const response = await fetch('http://localhost:8000/api/login', {
              method: 'POST',
              body: JSON.stringify({ email, password }),
              headers: { 'Content-Type': 'application/json' }
            });
            
            const data = await response.json()

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if(response.ok){
                localStorage.setItem("user", JSON.stringify(data))
                navigate('/products')
                alert("Login Successful")
            }
            // else{
            //     alert("Enter Valid email")
            // }
            console.log('Login successful:', data);
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
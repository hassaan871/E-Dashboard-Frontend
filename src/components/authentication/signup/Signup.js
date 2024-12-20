import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if(auth){
      navigate('/products')
    }
  }, [])

  // const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     console.warn('Username:', userName);
  //     console.warn('Email:', email);
  //     console.warn('Password:', password);

  //     await fetch('http://localhost:8000/api/signup', {
  //       method: 'POST',
  //       body: JSON.stringify({userName, email, password}),
  //       headers: {'Content-Type': 'application/json'}
  //     })
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.warn('Username:', userName);
    console.warn('Email:', email);
    console.warn('Password:', password);

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        body: JSON.stringify({ userName, email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Signup successful:', data);
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Signup</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
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
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

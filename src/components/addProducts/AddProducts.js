import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/invalid-input.css';

const AddProducts = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [userId, setUserId] = useState('') 
    const [company, setCompany] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if(!auth){
          navigate('/login')
        }
      }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();

        console.warn(`name: ${name}`)
        console.warn(`price: ${price}`)
        console.warn(`category: ${category}`)
        console.warn(`userId: ${userId}`)
        console.warn(`company: ${company}`)

        if(!name || !price || !category || !company){ setError(true);
         return false }

        setUserId(JSON.parse(localStorage.getItem('user'))._id)

        try{
            const result = await fetch('http://localhost:8000/api/add-product', {
                method: 'POST',
                body: JSON.stringify({name, price, category, company, userId}),
                headers: {
                    "Content-Type":"application/json"
                }
            });

            if(!result.ok){
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            result = await result.json()
            console.warn(result)
        } catch(error){
            console.error('Error during signup:', error);
        }
       
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>Add Product</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {error && !name && <span className="invalid-input">Enter name to proceed</span>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    {error && !price && <span className="invalid-input">Enter price to proceed</span>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    {error && !category && <span className="invalid-input">Enter category to proceed</span>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">company</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter company"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                    {error && !company && <span className="invalid-input">Enter company to proceed</span>}
                                </div>
                               
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts;
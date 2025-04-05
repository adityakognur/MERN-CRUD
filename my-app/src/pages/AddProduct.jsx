import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", product);
      navigate("/");
    } catch (err) {
      console.error("Error adding product:", err.message);
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />

        <label htmlFor="price">Price (₹)</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter price"
          required
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

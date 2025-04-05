import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./AddProduct.css"; // reuse the same CSS as AddProduct for consistency

function EditProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.error("Error fetching product:", err.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      navigate("/");
    } catch (err) {
      console.error("Error updating product:", err.message);
    }
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Edit Product</h2>

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

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;

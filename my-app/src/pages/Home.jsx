import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data.data);
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    fetchData();
  }, []);


  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error.message);
      alert("Failed to delete product.");
    }
  };
  
 
return (
  <div className="home-container">
    <div className="home-header">
      <h2>Product Dashboard</h2>
      <Link to="/add">
        <button className="add-button">Add Product</button>
      </Link>
    </div>

    {products.length === 0 ? (
      <div className="no-products">
        <p>No products available. Add a product to get started.</p>
      </div>
    ) : (
      <div className="products-grid">
        <AnimatePresence>
          {products.map((product) => (
            <motion.div
              key={product._id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>
              <div className="card-buttons">
                <Link to={`/edit/${product._id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )}
  </div>
);
}

export default Home;

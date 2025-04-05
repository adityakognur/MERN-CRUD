import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import ProductDetails from './pages/ProductDetails'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App

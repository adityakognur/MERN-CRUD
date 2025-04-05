import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`)
        setProduct(res.data.data)
      } catch (err) {
        console.error('Error fetching product:', err)
      }
    }
    fetchProduct()
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="150" />
      <p>Price: ₹{product.price}</p>
    </div>
  )
}

export default ProductDetails

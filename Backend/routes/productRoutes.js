import express from "express"
import Product from "../model/product.js";
import mongoose from "mongoose";

const router=express.Router();

import { getProducts,addProducts, getProductById,updateProduct,deleteProduct} from "../controller/productController.js";

router.post("/", addProducts);
router.get("/",getProducts)
router.get("/:id",getProductById);
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)

export default router;
  
  
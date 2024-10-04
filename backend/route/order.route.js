// routes/orderRoutes.js
import express from 'express';
import { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from '../controller/order.coontroller.js'

const router = express.Router();

router.post('/', createOrder); // Create a new order
router.get('/', getAllOrders); // Get all orders
router.get('/:id', getOrderById); // Get a specific order
router.put('/:id', updateOrder); // Update an order
router.delete('/:id', deleteOrder); // Delete an order

export default router;

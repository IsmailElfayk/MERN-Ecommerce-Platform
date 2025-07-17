import express from 'express'
import {PlaceOrder, PlaceOrderRazorpay, PlaceOrderStripe, allOrders, userOrders,updateStatus, verifyStripe} from '../controllers/orderController.js'
import adminAuth from './../middleware/adminAuth.js';
import authUser from './../middleware/auth.js';

const orderRouter = express.Router()


// admin features
orderRouter.post('/list',adminAuth ,allOrders)
orderRouter.post('/status',adminAuth ,updateStatus)


//payment features
orderRouter.post('/place',authUser,PlaceOrder)
orderRouter.post('/stripe',authUser,PlaceOrderStripe)
orderRouter.post('/razorpay',authUser,PlaceOrderRazorpay)


// User Features
orderRouter.post('/userorders', authUser, userOrders)

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter

import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    }
    ,
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', OrderSchema)

export default Order
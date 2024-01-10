import mongoose from "mongoose";

const productsCollection = 'products'

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    } ,
    description:  {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: false
    },
    available: {
        type: Boolean,
        required: true,
        default: 1
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        enum: ['casa','bebe'],
        required: true,
    },
    thumbnail: {
        type: [],
        required: false
    } 
})

export const productsModel = mongoose.model(productsCollection, productsSchema)
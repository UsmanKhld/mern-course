import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		category: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		stock: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const Product = mongoose.model("Product", productSchema);

export default Product;

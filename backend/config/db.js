import * as mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Connected to MongoDB at ${connection.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1); // Exit the process with a non-zero status code to indicate an error
	}
};

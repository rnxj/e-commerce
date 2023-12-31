import mongoose from "mongoose";

const connection = {
	isConnected: 0,
};

const connectDb = async () => {
	if (connection.isConnected) {
		console.log("Already connected to DB");
		return;
	}

	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState;
		if (connection.isConnected === 1) {
			console.log("Using previous connection to DB");
			return;
		}
		await mongoose.disconnect();
	}

	const db = await mongoose.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("New connection to DB");
	connection.isConnected = db.connections[0].readyState;
};

const disconnectDb = async () => {
	if (process.env.NODE_ENV === "production") {
		await mongoose.disconnect();
		connection.isConnected = 0;
	} else {
		console.log("Did not disconnected from DB");
	}
};

const db = { connectDb, disconnectDb };
export default db;

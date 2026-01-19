import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./database";

dotenv.config({
	path: "./.env",
});

connectDB()
	.then(() => {
		const port = process.env.PORT || 8000;
		const server = app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});

		server.on("error", (error) => {
			console.error("\nError in starting the server!\n", error);
			throw error;
		});
	})
	.catch((error) => {
		console.error("\nError in connecting to MongoDB!\n", error);
	});

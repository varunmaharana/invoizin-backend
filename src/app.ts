import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route";

const app = express();

// Error handlers to catch unhandled issues
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/company", companyRouter);
// app.use("/api/v1/contact", contactRouter);
// app.use("/api/v1/product", productRouter);
// app.use("/api/v1/invoice", invoiceRouter);

app.get("/", (req, res) => {
	res.send("Hello World");
});

export default app; 
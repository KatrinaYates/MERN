import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRouter from "./routes/contact.js";

dotenv.config();
connectDB();

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );

const app = express();
const port = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );
app.use( express.static( path.join( __dirname, "public" ) ) );

app.get( "/", ( req, res ) => {
    res.json( { message: "Server is running" } );
} );

app.post( "/api/echo", ( req, res ) => {
    res.json( { body: req.body } );
} );

app.use( "/api/projects", projectRoutes );
app.use( "/api/contact", contactRouter );

app.use( ( err, req, res, next ) => {
    const status = err.status || 500;
    res.status( status ).json( { error: err.message || "Internal Server Error" } );
} );

app.listen( port, () => {
    console.log( `Server listening on http://localhost:${port}` );
} );
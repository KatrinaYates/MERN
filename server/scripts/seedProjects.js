import dotenv from "dotenv";
import mongoose from "mongoose";
import Project from "../models/Project.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const projectsPath = path.join( __dirname, "../data/projects.json" );

const projectsData = JSON.parse(
    fs.readFileSync( projectsPath, "utf-8" )
);

async function seed () {
    try {
        await mongoose.connect( process.env.MONGO_URI );

        console.log( "Connected to MongoDB" );

        await Project.deleteMany( {} );
        console.log( "Old projects removed" );

        await Project.insertMany( projectsData.items );
        console.log( "Projects seeded" );

        await mongoose.disconnect();

        process.exit( 0 );
    } catch ( error ) {
        console.error( error );
        process.exit( 1 );
    }
}

seed();
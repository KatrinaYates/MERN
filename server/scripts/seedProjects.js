import dotenv from "dotenv";
import mongoose from "mongoose";
import Project from "../models/Project.js";
import projectsData from "../data/projects.json" assert { type: "json" };

dotenv.config();

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
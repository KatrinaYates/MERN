import Project from "../models/Project.js";

export async function getProjects ( req, res, next ) {
    try {
        const projects = await Project.find();

        res.json( {
            intro: {
                "eyebrow": "Featured Work",
                "title": "A few projects that reflect how I build",
                "description": "These featured projects highlight the kind of work I enjoy most: thoughtful systems, polished implementation, and collaborative problem solving across design and engineering."
            },
            items: projects,
        } );
    } catch ( error ) {
        next( error );
    }
}

export async function createProject ( req, res, next ) {
    try {
        const project = await Project.create( req.body );
        res.status( 201 ).json( project );
    } catch ( error ) {
        next( error );
    }
}

export async function updateProject ( req, res, next ) {
    try {
        const project = await Project.findByIdAndUpdate( req.params.id, req.body, {
            new: true,
        } );
        res.json( project );
    } catch ( error ) {
        next( error );
    }
}

export async function deleteProject ( req, res, next ) {
    try {
        await Project.findByIdAndDelete( req.params.id );
        res.json( { message: "Deleted" } );
    } catch ( error ) {
        next( error );
    }
}
import { body } from "express-validator";

export const contactValidation = [
    body( "name" ).trim().notEmpty().withMessage( "Name is required" ).escape(),
    body( "email" ).trim().notEmpty().withMessage( "Email is required" ).isEmail().withMessage( "Valid email is required" ).normalizeEmail(),
    body( "message" ).trim().notEmpty().withMessage( "Message is required" ).isLength( { max: 1000 } ).withMessage( "Message is too long" ).escape(),
];

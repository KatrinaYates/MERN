import { Router } from 'express';
import { validationResult } from 'express-validator';
import { contactValidation } from '../utils/validators.js';

const router = Router();

router.post( '/', contactValidation, ( req, res ) => {
  const result = validationResult( req );
  if ( !result.isEmpty() ) {
    return res.status( 400 ).json( { errors: result.array() } );
  }
  res.status( 201 ).json( { ok: true, message: 'Message received' } );
} );

export default router;

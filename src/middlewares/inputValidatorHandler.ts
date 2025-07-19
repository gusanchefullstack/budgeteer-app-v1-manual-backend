import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const inputValidatorHandler = (req:Request, res:Response, next:NextFunction) => {
    const result = validationResult(req)
    if(!result.isEmpty()){
        res.status(400).json({message: "Input validation failed", errors: result.array()})
    }
    else{
        next()
    }
}
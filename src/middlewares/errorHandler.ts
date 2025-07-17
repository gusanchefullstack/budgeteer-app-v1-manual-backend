import { Request, Response, NextFunction } from "express";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(
    "***********************************************************************"
  );
  console.error(err.message);
  console.error(err.stack);
  console.error(
    "***********************************************************************"
  );

  res.status(500).json({
    status: err.message,
    details: err.stack,
  });
};

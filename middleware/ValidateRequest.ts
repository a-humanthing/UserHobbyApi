import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"
export function ValidateRequestPayload(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req)
  console.log("error--", errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() })
  }
  next()
}

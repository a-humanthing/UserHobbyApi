import { validationResult } from "express-validator";
export function ValidateRequestPayload(req, res, next) {
    const errors = validationResult(req);
    console.log("error--", errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    next();
}
//# sourceMappingURL=ValidateRequest.js.map
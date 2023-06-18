import { check, param } from "express-validator";
export const addHobbyPayloadCondition = [
    check("passionLevel").exists({ checkFalsy: true }).isString(),
    check("name").exists({ checkFalsy: true }).isString(),
    check("year").exists({ checkFalsy: true }).isNumeric(),
];
export const updateHobbyPayloadCondition = [
    check("passionLevel").optional().exists({ checkFalsy: true }).isString(),
    check("name").optional().exists({ checkFalsy: true }).isString(),
    check("year").optional().exists({ checkFalsy: true }).isNumeric(),
];
export const idValidation = [
    param("id").isMongoId().withMessage("Invalid User Id"),
];
//# sourceMappingURL=types.js.map
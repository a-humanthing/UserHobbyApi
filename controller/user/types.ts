import { ObjectId } from "mongoose"
import { HobbyType } from "../hobby/types.js"
import { check, param } from "express-validator"

export interface UserType {
  hobbies: [ObjectId]
  name: string
}

export const addUserPayloadCondition = [
  check("name").exists({ checkFalsy: true }),
  check("hobbies").optional().isMongoId().withMessage("Invalid Hobby Id"),
]

export const updateUserPayloadCondition = [
  check("name").optional().exists({ checkFalsy: true }),
  check("hobbies").optional().isMongoId().withMessage("Invalid Hobby Id"),
  check("id").isMongoId().withMessage("Invalid User Id"),
]

export const idValidation = [
  param("id").isMongoId().withMessage("Invalid User Id"),
]

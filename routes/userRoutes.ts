import express from "express"
import { check } from "express-validator"
import { ValidateRequestPayload } from "../middleware/ValidateRequest.js"
const router = express.Router()
import {
  createUser,
  deleteUser,
  listUsers,
  updateUser,
  viewSingleUser,
} from "../controller/user/index.js"
import {
  addUserPayloadCondition,
  idValidation,
  updateUserPayloadCondition,
} from "../controller/user/types.js"
router.post("/", ...addUserPayloadCondition, ValidateRequestPayload, createUser)
router.get("/", listUsers)
router.put(
  "/:id",
  ...updateUserPayloadCondition,
  ValidateRequestPayload,
  updateUser
)
router.delete("/:id", ...idValidation, ValidateRequestPayload, deleteUser)
router.get("/:id", ...idValidation, ValidateRequestPayload, viewSingleUser)
export default router

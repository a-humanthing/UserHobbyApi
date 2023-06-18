import express from "express"
import {
  createHobby,
  deleteHobby,
  listHobbies,
  updateHobby,
  viewSingleHobby,
} from "../controller/hobby/index.js"
import {
  addHobbyPayloadCondition,
  idValidation,
  updateHobbyPayloadCondition,
} from "../controller/hobby/types.js"
import { ValidateRequestPayload } from "../middleware/ValidateRequest.js"
const router = express.Router()
router.post(
  "/",
  ...addHobbyPayloadCondition,
  ValidateRequestPayload,
  createHobby
)
router.get("/", listHobbies)
router.put(
  "/:id",
  ...updateHobbyPayloadCondition,
  ValidateRequestPayload,
  updateHobby
)
router.delete("/:id", ...idValidation, ValidateRequestPayload, deleteHobby)
router.get("/:id", ...idValidation, ValidateRequestPayload, viewSingleHobby)
export default router

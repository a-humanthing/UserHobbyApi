import express from "express"
import {
  createHobby,
  deleteHobby,
  listHobbies,
  updateHobby,
  viewSingleHobby,
} from "../controller/hobby/index.js"
const router = express.Router()
router.post("/", createHobby)
router.get("/", listHobbies)
router.put("/:id", updateHobby)
router.delete("/:id", deleteHobby)
router.get("/:id", viewSingleHobby)
export default router

import Hobby from "../../model/Hobby.js"
import User from "../../model/User.js"
import { HobbyType, ParamsType } from "./types.js"
import { Request, Response } from "express"

export const createHobby = async (
  req: Request<{}, {}, HobbyType>,
  res: Response
) => {
  try {
    const { name, passionLevel, year } = req.body

    const hobby = await Hobby.create({ name, passionLevel, year })
    await hobby.save()
    if (hobby) {
      res.json({ success: true, message: "Hobby Added" })
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
    console.log("hobby creation err", error)
  }
}

export const listHobbies = async (req: Request, res: Response) => {
  try {
    const list = await Hobby.find({})
    if (list) {
      res.json({ success: true, hobbies: list })
    } else {
      res.status(404).json({ success: false })
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export const updateHobby = async (
  req: Request<ParamsType, {}, HobbyType>,
  res: Response
) => {
  try {
    const { id } = req.params
    const isHobbyUpdated = await Hobby.findByIdAndUpdate(id, req.body)
    if (isHobbyUpdated) {
      return res.json({ success: true, message: "Hobby Updated" })
    }
    res.status(404).json({ success: false, message: "Hobby Update Failed." })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

export const deleteHobby = async (
  req: Request<ParamsType, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params
    const isHobbyDeleted = await Hobby.findByIdAndDelete(id)
    if (isHobbyDeleted) {
      const removeFromUsers = await User.updateMany(
        { hobbies: { $in: [id] } },
        { $pull: { hobbies: id } }
      )
      if (removeFromUsers) {
        return res.json({ success: true, message: "Hobby Deleted" })
      }
    }
    res.status(400).json({ success: false, message: "Hobby Delete Failed." })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

export const viewSingleHobby = async (
  req: Request<ParamsType, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params
    const singleHobby = await Hobby.findById(id)
    if (singleHobby) {
      return res.json({ success: true, hobby: singleHobby })
    }
    res.status(404).json({ success: false, message: "Hobby Not Found." })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

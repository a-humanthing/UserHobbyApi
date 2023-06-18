import mongoose from "mongoose"

const Schema = mongoose.Schema
const userSchema = new Schema({
  hobbies: [{ type: mongoose.Types.ObjectId, ref: "Hobby" }],
  name: { type: String, required: true },
})

export default mongoose.model("User", userSchema)

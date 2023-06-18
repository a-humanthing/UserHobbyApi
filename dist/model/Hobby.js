import mongoose from "mongoose";
const Schema = mongoose.Schema;
const hobbySchema = new Schema({
    passionLevel: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
});
export default mongoose.model("Hobby", hobbySchema);
//# sourceMappingURL=Hobby.js.map
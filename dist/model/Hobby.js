import mongoose from "mongoose";
const Schema = mongoose.Schema;
const hobbySchema = new Schema({
    passionLevel: {
        type: String,
        enum: ["Low", "Medium", "High", "Very-High"],
        default: "Medium",
        required: true,
    },
    name: { type: String, required: true },
    year: { type: Number, required: true },
}, { strict: "throw" });
export default mongoose.model("Hobby", hobbySchema);
//# sourceMappingURL=Hobby.js.map
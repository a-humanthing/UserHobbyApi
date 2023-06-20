import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    hobbies: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Hobby",
            // unique: true,
            // sparse: true,
            // validate: {
            //   validator: function (hobbies: mongoose.Types.ObjectId[]) {
            //     return hobbies.length === new Set(hobbies).size
            //   },
            // },
        },
    ],
    name: { type: String, required: true },
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map
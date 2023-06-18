import User from "../../model/User.js";
export const createUser = async (req, res) => {
    try {
        const { name, hobbies } = req.body;
        const isCreated = await User.create({ name, hobbies });
        await isCreated.save();
        if (isCreated) {
            return res.json({ success: true, message: "User Added" });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
        console.log("User creation err", error);
    }
};
export const listUsers = async (req, res) => {
    try {
        const list = await User.find({}).populate("hobbies");
        console.log("list-", list);
        if (list) {
            return res.json({ success: true, users: list });
        }
        res.status(404).json({ success: false, message: "Bad Request" });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { hobbies, name } = req.body;
        const user = await User.findById(id);
        const isUserUpdated = await User.findByIdAndUpdate(id, {
            $push: { hobbies },
            name,
        });
        if (isUserUpdated) {
            return res.json({ success: true, message: "User Updated" });
        }
        res.status(404).json({ success: false, message: "User Update Failed." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const isUserDeleted = await User.findByIdAndDelete(id);
        if (isUserDeleted) {
            return res.json({ success: true, message: "User Deleted" });
        }
        res.status(400).json({ success: false, message: "User Delete Failed." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const viewSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = await User.findById(id).populate("hobbies");
        if (singleUser) {
            return res.json({ success: true, User: singleUser });
        }
        res.status(404).json({ success: false, message: "User Not Found." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=index.js.map
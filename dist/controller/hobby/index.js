import Hobby from "../../model/Hobby.js";
export const createHobby = async (req, res) => {
    try {
        const { name, passionLevel, year } = req.body;
        const hobby = await Hobby.create({ name, passionLevel, year });
        await hobby.save();
        if (hobby) {
            res.json({ success: true, message: "Hobby Added" });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
        console.log("hobby creation err", error);
    }
};
export const listHobbies = async (req, res) => {
    try {
        const list = await Hobby.find({});
        if (list) {
            res.json({ success: true, hobbies: list });
        }
        else {
            res.status(404).json({ success: false });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
export const updateHobby = async (req, res) => {
    try {
        const { id } = req.params;
        const isHobbyUpdated = await Hobby.findByIdAndUpdate(id, req.body);
        if (isHobbyUpdated) {
            return res.json({ success: true, message: "Hobby Updated" });
        }
        res.status(404).json({ success: false, message: "Hobby Update Failed." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const deleteHobby = async (req, res) => {
    try {
        const { id } = req.params;
        const isHobbyDeleted = await Hobby.findByIdAndDelete(id);
        if (isHobbyDeleted) {
            return res.json({ success: true, message: "Hobby Deleted" });
        }
        res.status(400).json({ success: false, message: "Hobby Delete Failed." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const viewSingleHobby = async (req, res) => {
    try {
        const { id } = req.params;
        const singleHobby = await Hobby.findById(id);
        if (singleHobby) {
            return res.json({ success: true, hobby: singleHobby });
        }
        res.status(404).json({ success: false, message: "Hobby Not Found." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=index.js.map
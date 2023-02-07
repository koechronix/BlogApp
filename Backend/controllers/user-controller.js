import User from "../model/User";

const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    }catch (err){
        treturn res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({ users});
};

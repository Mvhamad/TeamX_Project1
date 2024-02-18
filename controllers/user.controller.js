const User = require("../models/user.model")

// get all users
module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        if(!users){
            res.status(404).json({msg: "No Users Found"})
        }else{
            res.status(200).json({ success: true, data: users })
        }
        
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}

// get user by id
module.exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            res.status(404).json({ msg: 'User not found' });
        } else {
            res.status(200).json({ success: true, data: user })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }

}

// new user
module.exports.newUser = async (req, res) => {
    const user = new User(req.body)
    try {
        const createdUser = await user.save();
        res.status(201).json({ success: true, data: createdUser })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

// update user info
module.exports.updateUserInfo = async (req, res) => {
    try {
        // use findOneAndUpdate to prevent overwrite of the whole document
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json({ success: true, data: updatedUser })
    } catch (error) {
        res.status(400).json({ success: false, error: "Invalid fields" });
    }
}

// delete a user
module.exports.delUser = async (req, res) => {
    try {
        const deleteUser = await  User.findByIdAndDelete({_id : req.params.id});
        if (!deleteUser) {
            return res.status(404).json({success: false, msg:"No user with this id."})
        } else {
            res.status(204).json({success:true, data:"Deleted Successfully!"})
        }
    } catch (error) {
        res.status(500).json({ success:false , message: error })
    }
}

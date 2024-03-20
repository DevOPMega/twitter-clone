const mongoose = require("mongoose");

const NameSchema = new mongoose.Schema({
    _id: false,
    firstName: {type: String, require: true, minLength: 4, maxLength: 18}, 
    lastName: {type: String, default: null}
});

const FollowersSchema = new mongoose.Schema({
    _id: false, 
    count: {type: Number, default: 0}, 
    usersId: [String]
});

const FollowingSchema = new mongoose.Schema({
    _id: false, 
    count: {type: Number, default: 0},
    usersId: [String]
});

const DobSchema = new mongoose.Schema({
    _id: false, 
    day: {type: Number, min: 1, max: 31},
    month: {type: Number, min: 1, max: 12},
    year: {type: Number, min: 1, max: 12}
});

// user schema defined 
const UserSchema = new mongoose.Schema({
    userId: {type: String, require: true, unique: true},
    name: NameSchema,
    email: {type: String, require: true, unique: true},
    password: {type: String},
    bio: {type: String, minLength: 25, maxLength: 250, default: null},
    joinedDate: {type: Date, default: Date.now},
    imgUrl: {type: String, default: null}, 
    bannerImgUrl: {type: String, default: null},
    followers: {type: FollowersSchema, default: () => ({})},
    following: {type: FollowingSchema, default: () => ({})},
    tweetsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'tweets'}],
    dob: DobSchema,
    likeTweetsId: [{type: mongoose.Schema.Types.ObjectId, ref: 'tweets'}],
    retweetTweetsId: [{type: mongoose.Schema.Types.ObjectId, ref: "tweets"}] 
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users; 
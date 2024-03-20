const Users = require("../Schemas/users");
const { getHashPassword } = require("../../lib/hashPassword");

// dummy function to generate userId 
const generateUserId = ({ firstName, lastName }) => {
    let userPrefix = firstName.toLowerCase() + lastName.toLowerCase();
    userPrefix = userPrefix.split(" ").join(""); // remove white spaces
    const userSuffix = (Math.floor(Math.random() * 100000)).toString();
    const userId = userPrefix + userSuffix;
    return userId
}

// register the user in twitter database 
const register = async ({ firstName, lastName, email, password }) => {
    try {
        // hash the password 
        const hashPassword = await getHashPassword(password);
        const userId = generateUserId({ firstName, lastName });

        // instance of new user
        const user = new Users({ name: { firstName, lastName }, userId, email, password: hashPassword });
        await user.save();
        return user;
    } catch (err) {
        console.error(err);
    }
    
}

// Get the followers of the user 
const getFollowersId = async (userId) => {
    try {
        const followersIds = await Users.findOne({userId});
        if (followersIds) {
            return followersIds.followers.usersId
        }
        return false;
    } catch(e) {
        console.log(e);
    }
}

// Get the followings of the user 
const getFollowingsId = async (userId) => {
    try {
        const followingsIds = await Users.findOne({userId});
        if (followingsIds) {
            return followingsIds.following.usersId
        }
        return false;
    } catch(e) {
        console.log(e);
    }
}

// follow target User Id from token present user Id
const followUser = async (userId, targetUserId) => {
    try {
        // Update the user ID
        const followingUser = await Users.findOneAndUpdate({userId}, {
            $push : {
                "following.usersId": targetUserId 
            }, 
            $inc: {"following.count": 1}
        }, {new : true});

        // Update the target User ID
        const followerUser = await Users.findOneAndUpdate({userId: targetUserId}, {
            $push: {
                "followers.usersId": userId
            },
            $inc: {"followers.count": 1}
        }, {new: true});

        // If both are find and Update return true
        if (followingUser && followerUser) {
            console.log(followerUser, followingUser);
            return true;
        } else {
            return false;
        }

    } catch(e) {
        console.log(e);
    }
}

const unfollowUser = async (userId, targetUserId) => {
    try {
        // Update the user ID
        const unfollowingUser = await Users.findOneAndUpdate({userId}, {
            $pull : {
                "following.usersId": targetUserId 
            }, 
            $inc: {"following.count": -1},
        }, {new : true});

        // Update the target User ID
        const unfollowUser = await Users.findOneAndUpdate({userId: targetUserId}, {
            $pull: {
                "followers.usersId": userId
            },
            $inc: {"followers.count": -1}
        }, {new: true});

        // If both are find and Update return true
        if (unfollowingUser && unfollowUser) {
            return true;
        } else {
            return false;
        }

    } catch(e) {
        console.log(e);
    }
}

// Get user like tweet Ids
const getUserLikeTweets = async (userId) => {
    try {
        const user = await Users.findOne({userId});
        if (user) {
            return user.tweet
        }
        return false;
    } catch(e) {
        console.log(e);
    }
}

// Like a tweet 
const likeTweet = async (userId, twitterId) => {
    // try {
    //     const user = await Users.findOneAndUpdate({userId}, {
            
    //     });
        
    // }
}

module.exports = {
    register,
    getFollowersId,
    getFollowingsId,
    followUser,
    unfollowUser
}
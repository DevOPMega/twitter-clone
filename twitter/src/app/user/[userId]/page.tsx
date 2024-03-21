import getUser from "@/app/lib/user/getUser";

// components 
import Profile from "./components/profile/Profile";
import TweetPost from "./components/tweetpost/TweetPost";
import Posts from "./components/post/Posts";
import Activity from "./components/activity/Activity";
import Suggestion from "./components/suggestion/Suggestion";

type Params = {
    params: {
        userId: string
    }
}

export default async function Page({params: {userId}}: Params) {
    
    // const getuser: Promise<any> | undefined = getUser(userId);
    // const data = await getuser;
    // const user = data.data[0].user;
    
    return (
        <div className="grid grid-cols-12 my-8 py-4 gap-4">
            <div className="hidden col-span-3 lg:block">
                <Profile /> 
            </div>            
            <div className="flex flex-col gap-4 col-span-12 lg:col-span-9
            lg:col-start-4 xl:col-span-6">
                <TweetPost /> 
                <Posts />
            </div>
            <div className="flex-col gap-4 hidden col-span-3 xl:flex ">
                <Activity />
                <Suggestion />
            </div>            
        </div>
    )
}
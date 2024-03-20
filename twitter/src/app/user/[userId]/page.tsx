import getUser from "@/app/lib/user/getUser";

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
        <h1>Hello Page</h1>
    )
}
import Image from "next/image";
import Link from "next/link";
import getUser from "@/app/lib/user/getUser";

export default async function Profile() {

    const getuser: Promise<any> | undefined = getUser();
    const response = await getuser;
    const user = response.data.user;

    console.log(user);

    return (
        <>
            <div className="w-full border border-black rounded-xl overflow-hidden
            ">
                <div className="bg-red-900 h-32 overflow-hidden relative">
                    <Image
                        src={"/img/banner-img.png"}
                        alt={"banner image"}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="flex flex-col items-center gap-1 -translate-y-8 px-4">
                    <div className="w-12 h-12 rounded-full border border-black overflow-hidden">
                        <Image
                            src={"/img/home.png"}
                            alt={"profile picture"}
                            width={48}
                            height={48}
                        />
                    </div>
                    <h2 className="text-2xl">{user.username.firstName + " " + user.username.lastName}</h2>
                    <p>@{user.userId}</p>
                    <div className="w-full flex justify-between pt-4">
                        <Link href="/">following {user.followings}</Link>
                        <Link href="/">follower {user.followers}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
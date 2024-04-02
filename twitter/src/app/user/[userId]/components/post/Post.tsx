import Image from "next/image"
import Link from "next/link"

export default function Post() {
    return (
        <div className="p-4 flex flex-col gap-2 border border-black rounded-lg">
            <div className="flex gap-2">
                <div>
                    <div className="w-9 border border-black rounded-full overflow-hidden">
                        <Image
                            src={"/img/home.png"}
                            alt="profile pic"
                            width={35}
                            height={35}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1 text-lg">
                        <Link href="/">
                            <span className="font-bold pr-1">Adesh Singh</span>
                            <span>@adeshsingh3002</span>
                        </Link>
                        <p> : 10h</p>
                    </div>
                    <div className="">
                        <p>
                            Something about my post is not incorrect I rather invest on my check bill wheathe ror not is not your problem Lokign for awesome cases of nost= intelligent virtaula prompt i have ever seen in my life that does't matter in term f
                        </p>
                    </div>
                    <div className="flex justify-between pt-2 pr-4">
                        <div>
                            <Link href="/">
                                Like 121
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                Comment 189
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                Retweet 198
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
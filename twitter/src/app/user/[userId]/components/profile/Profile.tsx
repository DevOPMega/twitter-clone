import Image from "next/image";
import Link from "next/link";

export default function Profile() {
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
                    <h2 className="text-2xl">Adesh Singh</h2>
                    <p>@adesh3002</p>
                    <div className="w-full flex justify-between pt-4">
                        <Link href="/">following 121</Link>
                        <Link href="/">follower 121</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
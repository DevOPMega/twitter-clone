import Link from "next/link"
import Image from "next/image"

export default function NavigationLink() {
    return (
        <div className="hidden pl-4 items-center gap-4 md:flex">
            <Link className="px-2 text-gray-600 opacity-75" href="/">
                <Image src={"/img/home.png"} alt="home" width={24} height={24}/>
            </Link>
            <Link className="px-2 text-gray-600 opacity-75" href="/">
                <Image src={"/img/explore.png"} alt="home" width={24} height={24}/>
            </Link>
            <Link className="px-2 text-gray-600 opacity-75" href="/">
                <Image src={"/img/message.png"} alt="home" width={24} height={24}/>
            </Link>
        </div>
    )
}
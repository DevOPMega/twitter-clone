import Link from "next/link"
import Image from "next/image"

export default function Profile() {
    return (
        <div className="flex gap-2">
            <Link className="opacity-75 pr-4" href="/">
                <Image src={"/img/notification.png"} alt="notification" width={24} height={24} />
            </Link>
            <p>Adesh Singh</p>
        </div>
    )
}

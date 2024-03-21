import Link from "next/link"

export default function Logo() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-violet-600 ">
                <Link href="/user/120">SocialFlicker!</Link>
            </h1>
        </div>
    )
}
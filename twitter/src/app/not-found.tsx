import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-screen h-screen
        flex flex-col justify-center items-center text-center">
            <h1 className="text-emerald-600 text-4xl">Not Found 404!</h1>
            <p>Could not find requested resource</p>
            <Link className="text-blue-600 font-semibold"
            href="/">Return Home</Link>
        </div>
    )
}
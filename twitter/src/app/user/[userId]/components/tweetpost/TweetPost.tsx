export default function TweetPost() {
    return (
        <>
            <div className="w-full border border-black rounded-xl overflow-hidden
            px-2 py-4 hidden lg:block">
                <form action=""
                    className="grid grid-cols-6 gap-2"
                >
                    <input 
                        className="col-span-5 px-4 py-2 rounded-md 
                        outline-none"
                        type="text"
                        placeholder="write something..."
                    />
                    <button
                        className="py-2 bg-lime-600 rounded-md"
                        type="submit"
                    >Post</button>
                </form>
            </div>
        </>
    )
}
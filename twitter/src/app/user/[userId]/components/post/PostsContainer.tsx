import Post from "./Post"

export default function PostsContainer() {
    return (
        <>
            <div className="flex flex-col gap-6 pb-4 h-screen  overflow-y-scroll no-scrollbar">
                <Post />
            </div>
        </>
    )
}
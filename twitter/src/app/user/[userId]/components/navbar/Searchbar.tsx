export default function SearchBar() {
    return (
        <div className="hidden gap-2 md:flex">
            <input
                className="w-48 px-4 py-2 rounded-md border border-gray-400 
                outline-none lg:w-96"
                placeholder="Search..."
            />
        </div>
    )
}
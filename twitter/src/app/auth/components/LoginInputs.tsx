// Input components for login information
export default function LoginInput() {
    return (
        <>
            <label>Username</label>
            <input
                className="p-2 text-black rounded-sm placeholder-slate-700 border
                 border-slate-600 outline-none focus:border-slate-900"
                name="userId"
            />
            <label>Password</label>
            <input
                className="p-2 text-black rounded-sm placeholder-slate-700 border
                 border-slate-600 outline-none focus:border-slate-900"
                type="password"
                name="password"
            />
        </>
    )
}
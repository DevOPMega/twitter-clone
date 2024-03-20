export default function RegisterInput() {
    return (
        <>
            <label>Firstname</label>
            <input
                className="p-2 text-black rounded-sm
                 placeholder-slate-700 border border-slate-600 outline-none focus:border-slate-900"
                name="firstName"
            />
            <label>Lastname</label>
            <input
                className="p-2 
                 placeholder-slate-700 border border-slate-600 outline-none focus:border-slate-900"
                name="lastName"
            />
            <label>Email</label>
            <input
                className="p-2 
                 placeholder-slate-700 border border-slate-600 outline-none focus:border-slate-900"
                type="email"
                name="email"
            />
            <label>Password</label>
            <input
                className="p-2 
                 placeholder-slate-700 border border-slate-600 outline-none focus:border-slate-900"
                type="password"
                name="password"
            />
        </>

    )
}
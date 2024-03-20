import Form from "./components/form";

export default function Page() {

    return (
        <div className="relative w-screen h-screen">
            <div className="absolute w-10/12 py-12 px-8   top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-zinc-600 lg:w-1/3">
                <Form />
            </div>
        </div>
    )
}
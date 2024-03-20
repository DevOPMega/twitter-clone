// Submit button component
export default function SubmitButton({ signMethod, isLoading }: { signMethod: string, isLoading: boolean }) {
    return (
        <button
            type="submit"
            className="relative top-4 bg-blue-900 text-white rounded-sm py-2 cursor-pointer hover:bg-blue-700"
        >{isLoading ? "Loading..." : signMethod.toUpperCase()}</button>
    )
}
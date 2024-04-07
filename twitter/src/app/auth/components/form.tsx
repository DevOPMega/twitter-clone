"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import type { AxiosResponse } from "axios";
import { registerUser, loginUser } from "@/app/lib/auth/signin";

// Components 
import SubmitButton from "./SubmitButton";
import RegisterInput from "./RegisterInputs";
import LoginInput from "./LoginInputs";

const UserValidationSchemaRegister = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string()
});

const UserValidationSchemaLogin = z.object({
    userId: z.string(),
    password: z.string()
});

type UserRegister = z.infer<typeof UserValidationSchemaRegister>;
type UserLogin= z.infer<typeof UserValidationSchemaLogin>;


// Form component: default
export default function Form() {
    // states
    const [signMethod, setSignMethod] = useState<"register" | "login">("register");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Handling on submit form
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true); // show loading 
        setError(null) // Clear previous error when a new request starts 

        let response: AxiosResponse | null = null;

        try {
            const formData = new FormData(event.currentTarget);

            if (signMethod === "register") {
                // Register new user
                const data: UserRegister = {
                    firstName: formData.get("firstname") as string,
                    lastName: formData.get("lastname") as string,
                    email: formData.get("email") as string,
                    password: formData.get("password") as string,
                }
                const success = UserValidationSchemaRegister.safeParse(data).success;
                if (!success) {

                }
                
                response = await registerUser(formData);
                console.log(response);
            } else {
                // Login user 
                const data: UserLogin = {
                    userId: formData.get("userId") as string,
                    password: formData.get("password") as string,
                }
                const success = UserValidationSchemaRegister.safeParse(data).success;
                if (!success) {

                }
                response = await registerUser(formData);
                console.log(response);
            }
        } catch (error) {
            console.error(error);
        } finally {
            // remove loading
            setIsLoading(false);
            if (response !== null) {
                const user: User = response.data;
                const userId = user.data[0].user.userId;
                router.replace(`/user/${userId}`);
            } else {
                console.log("not get any response");
            }
        }
    }

    return (
        <div className="flex flex-col px-4 py-2 space-y-4  text-zinc-800">
            {/* Showing login or register form */}
            <div>
                <p>
                    {signMethod === "register" ? "Register Now" : "Login Now"}
                </p>
            </div>
            <div>
                <h1 className="text-3xl font-bold">
                    {signMethod === "register" ? "Sign Up For Free" : "Login Twitter"}
                </h1>
            </div>
            <div>
                <p>
                    {signMethod === "register" ? "Already have an account? " : "Doesn't have account? "}
                    <span
                        className="text-blue-600 cursor-pointer"
                        onClick={() => {
                            setSignMethod(signMethod === "register" ? "login" : "register")
                        }}>
                        {signMethod === "register" ? "login" : "register"}
                    </span>
                </p>
            </div>

            {/* Showing error in form  */}
            <div>
                {error && <p className="text-red-500">{error}</p>}
            </div>

            {/* Form  */}
            <form onSubmit={onSubmit}>
                <div className="flex flex-col py-2 space-y-4  text-zinc-800">
                    {signMethod === "register" ? <RegisterInput /> : <LoginInput />}
                    <SubmitButton signMethod={signMethod} isLoading={isLoading} />
                </div>
            </form>
        </div>
    )
}
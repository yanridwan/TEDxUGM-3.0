"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"

interface CredentialsFormProps {
    csrfToken?: string;
}

export function CredentialsForm({ csrfToken }: CredentialsFormProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async(e:any)  => {
        e.preventDefault();
        const data =  new FormData(e.target);

        const signInResponse = await signIn("credentials", {
            email: data.get("email") as string,
            password: data.get("password") as string,
            redirect: false,
        });

        if (signInResponse && !signInResponse.error) {
            router.push("/");
        }  else {
            console.log("error: ", signInResponse);
            setError("email or password incorrect");
        }
    };

    return (
     <form onSubmit={handleSubmit}>
        {error && (
            <span className="bg-red">{error}</span>
        )}
        <input
            type="email"
            name="email"
            placeholder="email"
            required></input>
        <input
            type="password"
            name="password"
            placeholder="password"
            ></input>
     </form>)
};
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function getUser(userId: string) {
    // Get the cookies 
    const response = await fetch("http://localhost:5500/api/v1/users/"+userId, {
        headers: {Cookie: cookies().toString()}
    });

    if (!response.ok) {
        console.log("not get response");
        return undefined
    }

    return response.json();
}
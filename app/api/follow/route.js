
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";

export async function POST(request, res) {
    const { followingId } = await request.json();
    const accessToken = cookies().get("token")?.value;
    if (!accessToken) {
        return NextResponse.json(
            { success: false, msg: "connot get token" },
            { status: 400 }
        );
    }
    try {
        const user = await fetchJson(`${process.env.URL}/${endpoints.user.follow}`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${accessToken}` , 'Content-Type': 'application/json' },
            body: JSON.stringify({ followingId }),
        });
        return NextResponse.json(user, { status: 200 });
    } catch (err) {
        return NextResponse.json(err, { status: 400 });
    }
}
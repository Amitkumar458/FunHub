import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";
import { redirect } from "next/dist/server/api-utils";

export async function GET(request, res) {
  const accessToken = cookies().get("token")?.value;
  if (!accessToken) {
    return NextResponse.json(
      { success: false, msg: "connot get token" },
      { status: 400 }
    );
  }
  try {
    const user = await fetchJson(`${process.env.URL}/${endpoints.user.me}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";

export async function GET(request, res) {
  const accessToken = cookies().get("token")?.value;
  const search = request.nextUrl.searchParams.get('search');
  if (!accessToken) {
    return NextResponse.json(
      { success: false, msg: "connot get token" },
      { status: 400 }
    );
  }
  try {
    const user = await fetchJson(`${process.env.URL}/${endpoints.user.searchUser}/${search}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
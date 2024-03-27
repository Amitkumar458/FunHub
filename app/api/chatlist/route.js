import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";

export async function GET(request, res) {
  const accessToken = cookies().get("token")?.value;
  if (!accessToken) {
    return NextResponse.json(
      { success: false, msg: "connot get token" },
      { status: 400 }
    );
  }
  try {
    const chatlist = await fetchJson(`${process.env.URL}/${endpoints.chat.getChatList}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return NextResponse.json(chatlist, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 400 });
  }
}

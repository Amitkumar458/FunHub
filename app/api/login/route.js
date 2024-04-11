import { NextResponse } from "next/server";
import { fetchJson } from "../../../libs/api"
import { cookies } from "next/headers";
import { endpoints } from "@/config/endPoints";


 export async function POST(request) {
    const { username, password } = await request.json();
    const res = await fetchJson(`${process.env.URL}/${endpoints.user.login}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    }, true);
    const data = await res.json(); 
    console.log(data);
    if(data.success){
        cookies().set('token', data.token , { path: '/', maxAge: 315360000 });
        return NextResponse.json(data,{status:200})
    }   else {
        return NextResponse.json(data,{status:400})
    }     
}

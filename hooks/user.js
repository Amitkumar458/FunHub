'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useCookies } from "react-cookie";
const { endpoints } = require("@/config/endPoints")
const { fetchJson } = require("@/libs/api")



export function LoginUser() {
    const url = `http://localhost:3000/${endpoints.user.login}`
    // console.log(url);
    const mutation = useMutation({
        mutationFn: ({ username, password }) => {
            return fetchJson(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            }, true);
        }
    })
    return {
        handleLogin: async (username, password) => {
            try {
                const res = await mutation.mutateAsync({ username, password });
                const data = await res.json();
                return data;
            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isLoginLoading: mutation.isPending,
    }
}

export function useUser() {
    const [cookies, setCookie] = useCookies(["token"]);
    if(cookies.token){
        const { data, isLoading } = useQuery({
            queryKey: ['user'],
            queryFn: async () => {
                const res = await fetchJson('api/user', {
                    'Content-type': 'application/json'
                })
                return res;
            }
        })
        return { user: data, isUserLoading: isLoading }
    }else{
        return { user:null , isUserLoading:false}
    }
}
'use client'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useCookies } from "react-cookie";
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
    // const [cookies, setCookie] = useCookies(["token"]);
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetchJson(`http://localhost:3001/api/user`, {
                'Content-type': 'application/json'
            }, true)
            const data = await res.json();
            return data;
        },
        cacheTime: Infinity
    })
    return { user: data, isUserLoading: isLoading }
}

export function UseFind(user) {
    const {data , isLoading} = useQuery({
        queryKey:[user],
        queryFn: async () => {
            const res = await fetchJson(`http://localhost:3000/${endpoints.user.userdetails}?username=${user}`, {
                headers: { 'Content-Type': 'application/json' }
            }, true)
            const data = await res.json();
            return data;
        },
        cacheTime:Infinity
    })
    return {data , isLoading}
}

export function useFollow(){
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn:async ({ followingId }) => fetchJson(`/api/follow`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ followingId })
        }, true)
    })
    return {
        handleFollow: async (followingId , username) => {
            try {
                const res = await mutation.mutateAsync({ followingId });
                const data = await res.json();
                if(data.success){
                    client.invalidateQueries({ queryKey: [username] });
                }
                return data;
            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isFollowLoading: mutation.isPending,
    }
}


export function useSearch(search) {
    const {data , isLoading} = useQuery({
        queryKey:[search],
        queryFn :async () => {
            const res = await fetchJson(`http://localhost:3001/api/search?search=${search}` , {
                headers: { 'Content-Type': 'application/json' }
            } , true);
            const response = await res.json();
            return response;
        }
    })
    return {data , isLoading};
}
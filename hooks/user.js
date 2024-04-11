'use client'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useCookies } from "react-cookie";
const { endpoints } = require("@/config/endPoints")
const { fetchJson } = require("@/libs/api")



export function LoginUser() {
    const url = `${endpoints.url.LocalUrl}/api/login`
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

export function SignUser() {
    const url = `${endpoints.url.URL}/${endpoints.user.signup}`
    // console.log(url);
    const mutation = useMutation({
        mutationFn: ({ username, password , email , name }) => {
            return fetchJson(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password , email , name })
            }, true);
        }
    })
    return {
        handleSignIn: async (username, password , email , name) => {
            try {
                const res = await mutation.mutateAsync({ username, password , email , name});
                const data = await res.json();
                return data;
            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isSigninLoading: mutation.isPending,
    }
}


export function useUser() {
    // const [cookies, setCookie] = useCookies(["token"]);
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.LocalUrl}/api/user`, {
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
            const res = await fetchJson(`${endpoints.url.URL}/${endpoints.user.userdetails}?username=${user}`, {
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
        mutationFn:async ({ followingId }) => fetchJson(`${endpoints.url.LocalUrl}/api/follow`, {
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
            const res = await fetchJson(`${endpoints.url.LocalUrl}/api/search?search=${search}` , {
                headers: { 'Content-Type': 'application/json' }
            } , true);
            const response = await res.json();
            return response;
        }
    })
    return {data , isLoading};
}

export function useGetFollower(user) {
    const {data , isLoading} = useQuery({
        queryKey:[user , 'follower'],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.URL}/${endpoints.user.follower}/${user}`, {
                headers: { 'Content-Type': 'application/json' }
            }, true)
            const data = await res.json();
            return data;
        },
        cacheTime:3000000
    })
    return {data , isLoading}
}

export function useGetFollowing(user) {
    const {data , isLoading} = useQuery({
        queryKey:[user , 'following'],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.URL}/${endpoints.user.following}/${user}`, {
                headers: { 'Content-Type': 'application/json' }
            }, true)
            const data = await res.json();
            return data;
        },
        cacheTime:3000000
    })
    return {data , isLoading}
}
import { useMutation, useQuery } from "@tanstack/react-query";
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
    const [cookies, setCookie] = useCookies(['token']);
    const url = `http://localhost:3000/${endpoints.user.me}`
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetchJson(url, {
                'Content-type': 'application/json',
                'token': `Bearer ${cookies}`,
            })
            return res;
        }
    })
    return { user: data, isUserLoading: isLoading }
}

import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const cloudName = process.env.CLOUD_NAME;
const POST_LIST = "posts"

export function AddPhoto() {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    const mutation = useMutation({
        mutationFn: ({data}) => {
            return fetchJson(url, {
                method: 'POST',
                body: data
            }, true);
        }
    })
    return {
        handleUpload: async (data) => {
            try {
                const res = await mutation.mutateAsync({data});
                const response = await res.json();
                return response;
            } catch (err) {
                console.log(err);
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isUploadPending: mutation.isPending,
    }
}

export function usePost() {
    const client = useQueryClient();
    const mutation = useMutation({
        mutationFn: ({title , imageurl}) => fetchJson(`${endpoints.url.LocalUrl}/api/postblog`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(title , imageurl)
        }, true)
    })
    return {
        handlePost: async (title , imageurl) => {
            try {
                const res = await mutation.mutateAsync({title , imageurl});
                const data = await res.json();
                client.invalidateQueries([POST_LIST]);
                return data;
            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isPostLoading: mutation.isPending,
    }
}


export function useGetPost() {
    const { data, isLoading } = useQuery({
        queryKey: [POST_LIST],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.LocalUrl}/api/suggestpost`, {
                headers: { 'Content-Type': 'application/json' }
            }, true);
            const response = await res.json();
            return response;
        }
    })
    return { data, isLoading };
}

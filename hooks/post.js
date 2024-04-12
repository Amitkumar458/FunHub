
import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const cloudName = process.env.CLOUD_NAME;
const POST_LIST = "posts"
const POST_USER = 'userPost'

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

export function useGetUserPost(id) {
    const { data, isLoading } = useQuery({
        queryKey: [POST_USER , id],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.LocalUrl}/api/userpost?id=${id}`, {
                headers: { 'Content-Type': 'application/json' }
            }, true);
            const response = await res.json();
            return response;
        }
    })
    return { data, isLoading };
}

export function useGetPostById(id) {
    const {data , isLoading} = useQuery({
        queryKey:[id],
        queryFn:async () => {
            const res = await fetchJson(`${endpoints.url.URL}/${endpoints.blog.getPostById}/${id}` , {
                headers: { 'Content-Type': 'application/json' }
            }, true);
            const data = await res.json();
            return data;
        }
    })
    return {data , isLoading};
}


export function useGetComments(id , loading) {
    const {data , isLoading} = useQuery({
        queryKey:[id , loading],
        queryFn:async () => {
            if(loading){
                const res = await fetchJson(`${endpoints.url.URL}/${endpoints.blog.getAllComment}/${id}` , {
                    headers: { 'Content-Type': 'application/json' }
                }, true);
                const data = await res.json();
                return data;
            }else{
                return {success:false , msg:"comment section closed"}
            }
        }
    })
    return {data , isLoading};
}

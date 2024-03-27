import { endpoints } from "@/config/endPoints";
import { fetchJson } from "@/libs/api";
import { useMutation, useQuery } from "@tanstack/react-query";


export function useChatList() {
    const { data, isLoading } = useQuery({
        queryKey: ['chatlist'],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.LocalUrl}/api/chatlist`, {
                headers: { 'Content-Type': 'application/json' }
            }, true);
            const response = await res.json();
            return response;
        }
    })
    return { data, isLoading };
}

export function useChatData({ id, name }) {
    const { data, isLoading } = useQuery({
        queryKey: [id, name],
        queryFn: async () => {
            const res = await fetchJson(`${endpoints.url.LocalUrl}/api/messagelist?id=${id}`, {
                headers: { 'Content-Type': 'application/json' }
            }, true);
            const response = await res.json();
            return response.data[0];
        }
    })
    return { data, isLoading };
}

export function useSendChat() {
    const mutation = useMutation({
        mutationFn: ({ senderId , reciverId , chatId , text }) => fetchJson(`${endpoints.url.URL}${endpoints.chat.sendMessage}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(senderId , reciverId , chatId , text)
        }, true)
    })
    return {
        sendMessage: async (senderId , reciverId , chatId , text) => {
            try {
                const res = await mutation.mutateAsync({ senderId , reciverId , chatId , text});
                const data = await res.json();
                return data;
            } catch (err) {
                return {
                    success: false,
                    error: 'something wents wrong.'
                }
            }
        },
        isSendMessageLoading: mutation.isPending,
    }
}
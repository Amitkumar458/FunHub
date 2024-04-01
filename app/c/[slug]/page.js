"use client"
import Loder from "@/component/HomePage/Loder";
import SendMessage from "@/component/froms/SendMessage";
import Layout from "@/hocs/Layout";
import { useChatData, useSendChat } from "@/hooks/chat";
import { useUser } from "@/hooks/user";
import Pusher from "@/utils/Pusher";
// import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Chats({ params }) {
    const id = params.slug;
    const searchParams = useSearchParams();
    const { user, isUserLoading } = useUser();
    const name = searchParams.get('name')
    const { data, isLoading } = useChatData({ id, name });
    const [message, setMessage] = useState([]);
    // const queryClient = useQueryClient();

    useEffect(() => {
        setMessage(data?.message);
    }, [data, isLoading]);


    useEffect(() => {
        const channel = Pusher.subscribe(`${user?.data.id}-${id}`);
        window.scrollTo(0, document.body.scrollHeight);
        channel.bind('message', function (messageRecive) {
            if(!message){
                setMessage([{reciverId: user?.data.id, senderId: id, text: messageRecive.message, chatId: data.id }]);
            }else{
                setMessage([...message , { reciverId: user?.data.id, senderId: id, text: messageRecive.message, chatId: data.id }]);
            }
            window.scrollTo(0, document.body.scrollHeight);
        });
        return () => {
            Pusher.unsubscribe(`${user?.data.id}-${id}`);
        }
    }, [id, data, message, user]);

    // useEffect(() => {
    //     const channel = Pusher.subscribe(`${user?.id}`);
    //     channel.bind('reset' , (messageRecived) => {
    //         if(messageRecived.reset){
    //             queryClient.invalidateQueries('chatlist');
    //         }
    //     });
    //     return () => {
    //         Pusher.unsubscribe(`${user?.id}`);
    //     }
    // } , [queryClient , user?.id]);

    const { sendMessage, isSendMessageLoading } = useSendChat();

    const messageSending = async (text) => {
        if(!message){
            setMessage([{reciverId: id, senderId: user.data.id, text, chatId: data.id }]);
        }else{
            setMessage([...message , { reciverId: id, senderId: user.data.id, text, chatId: data.id }]);
        }
        window.scrollTo(0, document.body.scrollHeight);
        const response = await sendMessage({ senderId: user.data.id, reciverId: id, text, chatId: data.id });
        if (!response.success) {
            toast.error("message not sent , something went wrong");
        }
    }

    return (
        <Layout col={3} username={name} inputbox={true}>
            <div></div>
            {!isLoading && !isUserLoading && message?.map((value, i) => {
                return (
                    <div key={i} className={user.data.id === value.senderId ? "messagetextBox2" : "messagetextBox"}><span className={user.data.id === value.senderId ? "messagetextborder" : "messagetextborder2"}>{value.text}</span></div>
                    )
                })}
            {isLoading && <Loder />}
            <SendMessage messageSending={messageSending} />
        </Layout>
    )
}
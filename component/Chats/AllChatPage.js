"use client"
import { useChatList } from "@/hooks/chat";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import ChatLoading from "./ChatLoading";
// import { useUser } from "@/hooks/user";
// import { useQueryClient } from "@tanstack/react-query";
// import Pusher from "@/utils/Pusher";


function RenderRow({ value }) {
    return (
        <Link style={{ textDecoration: "none" }} href={`/c/${value.id}?name=${value.name}`}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'orangered' }} alt="Travis Howard">{value.name.charAt(0).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={value.username}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {value.name}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component='div' />
        </Link>
    );
}



export default function AllChatPage() {
    const { data, isLoading } = useChatList();
    const arr = [1,2,3,4,5,6,7,8,9];
    // const {user , isUserLoading} = useUser();
    // const queryClient = useQueryClient();
    // useEffect(() => {
    //     const channel = Pusher.subscribe(`${user?.id}`);
    //     channel.bind('message' ,function (messageRecived) {
    //         console.log(messageRecived);
    //         if(messageRecived.message){
    //             queryClient.invalidateQueries('chatlist');
    //         }
    //     });
    //     return () => {
    //         Pusher.unsubscribe(`${user?.id}`);
    //     }
    // } , [queryClient, user?.id , isUserLoading]);
    return (
        <>
            <List sx={{ width: '100%' , bgcolor: 'background.paper' }}>
                {!isLoading && data.success && data.data.map((value, i) => {
                    return (
                        <RenderRow key={i} value={value.users[0]} />
                    )
                })}
                <div>
                {isLoading && arr.map((value) => {
                    return <ChatLoading key={value}/>
                })}
                </div>
            </List>
        </>
    )
}
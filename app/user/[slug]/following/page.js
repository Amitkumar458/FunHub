"use client"
import Layout from '@/hocs/Layout';
import { useGetFollowing } from '@/hooks/user';
import React from 'react'
import List from '@mui/material/List';
import RenderRow from '@/component/Common/RenderUser';
import ChatLoading from '@/component/Chats/ChatLoading';

const Following = ({ params }) => {
  const user = params.slug;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { data, isLoading } = useGetFollowing(user);
  return (
    <Layout loginRequired={true} followers={true}>
      {!isLoading ?
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {data.success && data?.data.map((value, i) => {
            return (
              <RenderRow key={i} value={value} />
            )
          })}
        </List>
      : arr.map((value) => {
        return <ChatLoading key={value} />
      })}
    </Layout>
  )
}

export default Following;
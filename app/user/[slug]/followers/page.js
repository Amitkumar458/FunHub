"use client"
import Layout from '@/hocs/Layout';
import { useGetFollower } from '@/hooks/user';
import React from 'react'
import { RenderRow } from '@/component/Common/RenderUser';
import { List } from '@mui/icons-material';
import ChatLoading from '@/component/Chats/ChatLoading';

const Follower = ({ params :{slug} }) => {
  console.log(slug);
  const { data, isLoading } = useGetFollower(slug);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(data);
  return (
    <Layout loginRequired={true} followers={true}>
      <div>{data ? <div>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {data.success && data?.data.map((value, i) => {
            return (
              <RenderRow key={i} value={value} />
            )
          })}
        </List>
      </div> : <div>{isLoading && arr.map((value) => {
        return <ChatLoading key={value} />
      })}</div>}</div>
    </Layout>
  )
}

export default Follower;
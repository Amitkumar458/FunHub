"use client"
import Layout from '@/hocs/Layout';
import { useGetFollowing } from '@/hooks/user';
import React from 'react'
import List from '@mui/material/List';
import RenderRow from '@/component/Common/RenderUser';

const Following = ({ params }) => {
  const user = params.slug;
  const { data, isLoading } = useGetFollowing(user);
  return (
    <Layout loginRequired={true} following={true}>
      {!isLoading ?
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {data.success && data?.data.map((value, i) => {
            return (
              <RenderRow key={i} value={value} />
            )
          })}
        </List>
      : <div className="centerdiv">Loading...</div>}
    </Layout>
  )
}

export default Following;
"use client"
import Layout from '@/hocs/Layout';
import { useGetFollower } from '@/hooks/user';
import React from 'react'

const Follower = ({params}) => {
  const user = params.slug;
  const {data , isLoading} = useGetFollower(user);
  console.log(data);
  return (
    <Layout loginRequired={true} follower={true}>
        <div>Followers</div>
    </Layout>
  )
}

export default Follower;
"use client"
import Layout from '@/hocs/Layout';
import { useGetFollowing } from '@/hooks/user';
import React from 'react'

const Following = ({params}) => {
    const user = params.slug;
    const {data , isLoading} = useGetFollowing(user);
    console.log(data);
  return (
    <Layout loginRequired={true} following={true}>
        <div>Following</div>
    </Layout>
  )
}

export default Following;
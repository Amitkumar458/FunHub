'use client'
import UserPosts from '@/component/Account/UserPosts';
import Media from '@/component/Common/Media';
import Layout from '@/hocs/Layout';
import { useGetPostById } from '@/hooks/post';
import React from 'react'

const UserPost = ({params}) => {
    const id = params.slug;
    const {data , isLoading} = useGetPostById(id);
    // console.log(data);
  return (
    <Layout>
      <div>
        {data && data.success &&
            <Media value={data.data[0]} loading={isLoading} />
        }
        {isLoading && <Media loading={true}/>}
    </div>
    </Layout>
  )
}

export default UserPost;
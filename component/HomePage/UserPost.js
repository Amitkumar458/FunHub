'use client'
import * as React from 'react';;
import { useGetPost } from '@/hooks/post';
import Media from '../Common/Media';


export default function UserPost() {
  const {data , isLoading} = useGetPost();
  return (
    <div>
        {data && data.success && data.data.map((value , i) => {
            return (<Media key={i} value={value} loading={isLoading} />)
        })}
        {isLoading && <Media loading={true}/>}
        {isLoading && <Media loading={true}/>}
    </div>
  );
}

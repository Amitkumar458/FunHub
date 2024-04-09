import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const ChatLoading = () => {
  return (
    <div style={{display:'flex' , alignItems:'center' , margin:'8px'}}>
      <Skeleton variant="circular" width={40} height={40}/>
      <div className='m-2'>
      <Skeleton variant="text" sx={{ fontSize: '0.5rem' , width:'70vw' }} />
      <Skeleton variant="text" sx={{ fontSize: '0.3rem', width:'70vw' }} />
      </div>
    </div>
  )
}

export default ChatLoading;
"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { AccountBox, ChatSharp, Home, Search, VideoCall } from '@mui/icons-material';
import { useRouter } from 'next/navigation'


export default function FixedBottomNavigation({user , col , inputbox}) {
  const [value, setValue] = React.useState(col ? col : 0);
  const arr = ["" , "search" , "videocall" , "chats" , `user/${user?.username}`];
  const ref = React.useRef(null);
  const router = useRouter();

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        {!inputbox && <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            router.push(`/${arr[newValue]}`);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Search" icon={<Search />} />
          <BottomNavigationAction label="VideoCall" icon={<VideoCall />} />
          <BottomNavigationAction label="Chats" icon={<ChatSharp />} />
          <BottomNavigationAction label="Account" icon={<AccountBox />} />

        </BottomNavigation>}
      </Paper>
    </Box>
  );
}


"use client"
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Link from "next/link";
import SearchForm from "../froms/SearchForm";

function App({ user, chat, search, username, handleSearchData }) {
  username = username?.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ background: 'white', color: 'black', boxShadow: 1, display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>

        {search ? <>
          <SearchForm handleSearchData={handleSearchData} />
        </> :
          chat ? <Toolbar sx={{ width: '100%', justifyContent: 'center', fontSize: '30px' }}>Chats</Toolbar> : username ? <Toolbar sx={{ width: '100%', justifyContent: 'center', fontSize: '23px' }}>{username}</Toolbar> : <>
            <Toolbar>FunHub</Toolbar>
            {user ? <Toolbar><AddBoxOutlinedIcon /></Toolbar> : <Toolbar sx={{ color: "darkblue", fontWeight: 500 }}><Link href='/login' style={{ textDecoration: 'none' }}>Log in</Link></Toolbar>}
          </>
        }
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default App;
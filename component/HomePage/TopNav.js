"use client"
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Link from "next/link";

function App({user}) {
    return (
      <React.Fragment>
        <AppBar position="fixed" sx={{background:'white' , color:'black' , boxShadow:1 , display:'flex' , flexDirection:"row" , justifyContent:"space-between" }}>
          <Toolbar>FunHub</Toolbar>
          {user ? <Toolbar><AddBoxOutlinedIcon/></Toolbar> : <Toolbar sx={{color:"darkblue", fontWeight:500}}><Link href='/login' style={{ textDecoration: 'none' }}>Log in</Link></Toolbar> }
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
}

export default App;
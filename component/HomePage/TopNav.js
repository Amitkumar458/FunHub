"use client"
import { AppBar, TextField, Toolbar } from "@mui/material";
import React from "react";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Link from "next/link";
import { InputField } from "../Common/inputbox";
import SearchForm from "../froms/SearchForm";

function App({ user, search , handleSearchData }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ background: 'white', color: 'black', boxShadow: 1, display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>

        {search ? <>
          <SearchForm handleSearchData={handleSearchData}/>
        </> : <>
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
'use client'
import Layout from "@/hocs/Layout";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Divider, List, ListItemAvatar, Typography } from "@mui/material";
import Link from "next/link";

function RenderRow({value}) {
    return (
        <Link style={{textDecoration:"none"}} href={`/user/${value.username}`}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{bgcolor: 'orangered'}} alt="Travis Howard">{value.name.charAt(0).toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value.username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {value.name}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component='div'/>
      </Link>
    );
  }


export default function Search() {
    const [data, setdata] = useState();
    const handleSearchData = (searchData) => {
        setdata(searchData);
    }
    return (
        <Layout search={true} handleSearchData={handleSearchData}>
            <div>{data ? <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {data.success && data?.data.map((value , i) => {
                        return (
                            <RenderRow key={i} value={value}/>
                        )
                    })}
                </List>
            </div> : "loading"}</div>
        </Layout>
    )
}
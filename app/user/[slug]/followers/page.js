"use client"
import Layout from '@/hocs/Layout';
import { useGetFollower } from '@/hooks/user';
import React from 'react'
import { Avatar, Divider, List, ListItemAvatar, Typography , ListItem, ListItemText } from "@mui/material";
import Link from "next/link"

function RenderRow({ value }) {
  return (
    <Link style={{ textDecoration: "none" }} href={`/user/${value.username}`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'orangered' }} alt="Travis Howard">{value.name.charAt(0).toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value.username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
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
      <Divider variant="inset" component='div' />
    </Link>
  );
}

const Follower = ({ params }) => {
  const user = params.slug;
  const { data, isLoading } = useGetFollower(user);
  console.log(data);
  return (
    <Layout loginRequired={true} followers={true}>
      <div>{data ? <div>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {data.success && data?.data.map((value, i) => {
            return (
              <RenderRow key={i} value={value} />
            )
          })}
        </List>
      </div> : <div className="centerdiv">Loading...</div>}</div>
    </Layout>
  )
}

export default Follower;
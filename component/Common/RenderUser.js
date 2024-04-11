'use client'
import { Avatar, Divider, List, ListItemAvatar, Typography, ListItem, ListItemText } from "@mui/material";
import Link from "next/link"
import React from "react";
export default function RenderRow({ value }) {
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
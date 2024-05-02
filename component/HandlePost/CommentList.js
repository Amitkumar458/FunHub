import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import ReactTimeago from 'react-timeago';

function RenderRow({ value }) {
    return (
        <div style={{ textDecoration: "none" }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'orangered' }} alt="Travis Howard">{value.username.charAt(0).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                    <React.Fragment>
                        <Typography
                                sx={{ display: 'inline' , fontSize:'medium' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {value.username}
                                {"  "}
                                <ReactTimeago live={false} date={value.createdAt} />
                        </Typography>
                    </React.Fragment>}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' , fontSize:'large' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {value.text}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component='div' />
        </div>
    );
}

const CommentList = ({ value }) => {
    return (
        <div>
            {value.map((data, i) => {
                return (<RenderRow key={i} value={data} />)
            })}
        </div>
    )
}

export default CommentList;
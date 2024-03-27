"use client"
import React from 'react';
import { Alert, Avatar, Box, Stack, Typography } from '@mui/material';
import { useFollow, useUser } from '@/hooks/user';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Link from 'next/link';

const UserProfile = ({ data }) => {
    const { user, isUserLoading } = useUser();
    const enable = data?.data?.followers.map((val) => { return user?.data.id === val.followerId })[0];
    const self = data?.data?.username === user?.data?.username;
    const { handleFollow, isFollowLoading } = useFollow();
    const followhandler = async () => {
        const res = await handleFollow(data.data.id, data.data.username);
    }
    return (
        <div >
            {data.success &&
                <Box display="flex" alignItems="center" justifyContent="center" overflow='hidden'>
                    <Stack sx={{ my: 3 }} direction="row" spacing={8}>
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ fontSize: '50px', width: 100, height: 100, bgcolor: 'orangered' }}
                        >
                            {data.data.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                            <h1>{data.data.username}</h1>
                            <Stack direction='row' flexWrap="wrap" spacing={2}>
                                {self ? <button type="button" className="btn btn-secondary">Edit</button> :
                                    enable ? <button type="button" className="btn btn-secondary">Following</button> :
                                        <button type="button" className="btn btn-primary" disabled={enable} onClick={() => { followhandler() }}>{isFollowLoading || isUserLoading ? <div className="spinner-grow" role="status">
                                        </div> : "Follow"}</button>
                                }
                                {data.data.id === user.data.id ? <button type="button" className="btn btn-primary">Log out</button> : <Link href={`/c/${data.data.id}?name=${user.data.name}`}><button type="button" className="btn btn-primary">Message</button></Link>}
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            }
            {data.success &&
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                            m: 1,
                        },
                    }}
                >
                    <Stack direction='row' flexWrap="wrap" spacing={7} sx={{ m: 1 }}>
                        <div className='text-center w-33'>
                            <h3>{data.data.posts.length}</h3>
                            <h5>Posts</h5>
                        </div>
                        <div className='text-center'>
                            <h3>{data.data.followers.length}</h3>
                            <h5>Followers</h5>
                        </div>
                        <div className='text-center'>
                            <h3>{data.data.following.length}</h3>
                            <h5>Follwing</h5>
                        </div>
                    </Stack>
                </Box>
            }
            {data.success === false &&
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        backgroundColor: 'primary',
                    }}
                >
                    <Typography style={{ color: 'black', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <InfoOutlinedIcon sx={{ color: "red", fontSize: '7rem' }} />
                        <Typography variant='h5'>{data.msg}</Typography>
                    </Typography>
                </Box>
            }
        </div>
    );
};

export default UserProfile;
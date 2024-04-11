
import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link'
import ReactTimeago from 'react-timeago';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { endpoints } from '@/config/endPoints';

const Media = ({value , loading}) => {
  const [toggle , settoggle] = React.useState(false);
  return (
    <Card sx={{}}>
      <CardHeader
       sx={{paddingBottom:'0'}}
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar alt="Ted talk">
                <Link style={{textDecoration:'none', color:'white'}} href={`/user/${value.author.username}`} >{value.author.name.charAt(0).toUpperCase()}</Link>
            </Avatar>
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Link style={{textDecoration:'none', color:'black'}} href={`/user/${value.author.username}`} >{value.author.username}</Link>
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            <ReactTimeago date={value.createdAt} />
          )
        }
      />

      <CardContent sx={{paddingBottom:'0' , paddingTop:'0'}}>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" fontSize={20} component="p">
            {
              value.title
            }
          </Typography>
        )}
      </CardContent>

      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="360"
          image={value.Image}
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}

    <CardActions disableSpacing>
        <IconButton sx={{width:'33%'}} aria-label="Like" onClick={() => settoggle(!toggle)}>
        <FavoriteIcon sx={{color:toggle ? "red" : ""}} />
        </IconButton>
        <IconButton sx={{width:'33%'}} aria-label="comment">
        <MapsUgcOutlinedIcon />
        </IconButton>
        <IconButton sx={{width:'33%'}} onClick={() => {navigator.share({url:`${endpoints.url.LocalUrl}/p/${value.id}`})}} aria-label="share">
        <ShareIcon />
        </IconButton>
    </CardActions>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default Media;

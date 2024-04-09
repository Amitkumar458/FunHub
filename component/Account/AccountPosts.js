
import { useGetUserPost } from "@/hooks/post";
import { ImageList, ImageListItem } from "@mui/material";


const AccountPosts = (id) => {
  const {data , isLoading} = useGetUserPost(id.id);
  return (
    !isLoading && <div className="xcenter">
      <ImageList
        sx={{ justifyContent: "center", maxWidth: 500 , overflow:'hidden'}}
        cols={3}
      >
        {data.success && data.data.map((item , i) => (
          <ImageListItem key={i}>
            <img
              src={`${item.Image}?w=164&h=164&fit=crop&auto=format`}
              alt={'image'}
              loading="lazy"
              style={{minHeight:'150px'}}
            />
          </ImageListItem>
        ))}
        {data.success && data.data.length === 0 && 
          itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </div>
  );
};

export default AccountPosts;

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
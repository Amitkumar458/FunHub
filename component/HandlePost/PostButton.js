'use client'
import { AddPhoto } from '@/hooks/post';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';


const PostButton = () => {
  
  const {handleUpload , isUploadPending} = AddPhoto();
  const runthisfunction = async (event) => {
    const file = event.target.files[0];

    const data = new FormData();
    data.append("upload_preset", "upload");
    data.append("file" , file);
    const imaResult = await handleUpload(data);
    console.log(imaResult);
      if(imaResult){
        localStorage.setItem('image' , JSON.stringify(imaResult));
        window.location.href = `${window.location.origin}/create`;
      }else{
        toast.error("something went wrong");
      }
  }

  return (
    <>
    {isUploadPending ? <CircularProgress size={20} color="secondary" /> : <><input
        type="file"
        id="select-image"
        accept="image/gif, image/jpeg, image/png"
        style={{ display: "none" }}
        onChange={runthisfunction}
      />
      <label htmlFor="select-image">
        <AddBoxOutlinedIcon/>
      </label></>}
    </>
  );
};

export default PostButton;

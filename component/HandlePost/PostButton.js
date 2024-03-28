import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const PostButton = () => {
  return (
    <>
      <input
        type="file"
        id="select-image"
        accept="image/gif, image/jpeg, image/png"
        style={{ display: "none" }}
      />
      <label htmlFor="select-image">
        <AddBoxOutlinedIcon/>
      </label>
    </>
  );
};

export default PostButton;

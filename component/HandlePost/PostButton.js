import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const PostButton = () => {

  const runthisfunction = (event) => {
    console.log("amit function is Working");
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("image" , reader.result);
    }
    reader.readAsDataURL(file);
    window.location.href = `${window.location.origin}/create`;
  }

  return (
    <>
      <input
        type="file"
        id="select-image"
        accept="image/gif, image/jpeg, image/png"
        style={{ display: "none" }}
        onChange={runthisfunction}
      />
      <label htmlFor="select-image">
        <AddBoxOutlinedIcon/>
      </label>
    </>
  );
};

export default PostButton;

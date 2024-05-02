import { useState } from "react";

import Send from "@mui/icons-material/Send";
import { Box, InputAdornment, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { usePostComment } from "@/hooks/post";
import { redirect } from "next/navigation";

const Addcomment = ({postId}) => {
  const [message, setMessage] = useState("");
    const {handleAddComment , isAddCommentLoading} = usePostComment();
  const summitMessage = async () => {
    let send = message;
    send = send.trim();
    if (!send || send === "") {
      setMessage("");
      return;
    }
    setMessage("");
    const data = await handleAddComment(send , postId);
    if(!data.success){
        redirect('/login');
    }
  };

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
          <TextField
            placeholder="Comment Something ..."
            style={{ width: "100%" }}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                summitMessage();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="messageBox">
                  <Send
                    sx={{ color: "blueviolet", fontSize: "30px" }}
                    onClick={summitMessage}
                  />
                </InputAdornment>
              ),
            }}
          />
      </Paper>
    </Box>
  );
};

export default Addcomment;

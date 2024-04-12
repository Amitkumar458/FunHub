export const endpoints = {
    user:{
        login:"api/user/login",
        signup:"api/user/signup",
        me:"api/user/me",
        find:"api/user", // api/user/:name;
        userdetails:"api/user/all", // api/user/all?username=username;
        searchUser:"api/user", // api/user/:name
        follow:"api/user/addfollowing", // post request provid followingId
        unfollow:"api/unfollow",
        following:"api/user/following", // api/user/following/:username
        follower:"api/user/followers", // api/user/follower/:username
    },
    blog:{
        suggestBlog:"api/post/suggest",
        postBlog:"api/post/postBlog",
        userPost:'api/post/',
        getPostById:'api/post/p',
        getAllComment:'api/post/comment', //api/post/comment/:id
    },
    chat:{
        getChatList:"api/chat",
        chatsMessage:"api/chat/c", // "api/chat/c/:id"
        sendMessage:"api/chat/message"
    },
    url:{
        URL:process.env.URL,
        LocalUrl:process.env.CURRENT
    }
}
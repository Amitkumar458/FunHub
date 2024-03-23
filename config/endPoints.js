export const endpoints = {
    user:{
        login:"api/user/login",
        signup:"api/user/signup",
        me:"api/user/me",
        find:"api/user", // api/user/:name;
        userdetails:"api/user/all", // api/user/all?username=username;
        searchUser:"api/user", // api/user/:name
        follow:"api/user/addfollowing", // post request provid followingId
        unfollow:""
    },
    blog:{
        postBlog:"api/",
        suggestBlog:"api/post/suggest",
        postBlog:"/api/post/postBlog"
    }
}
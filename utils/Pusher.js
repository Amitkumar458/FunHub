import Pusher from "pusher-js";


const pusherClient = new Pusher("5829b290926b8657101a" , {
    cluster: "ap2",
});

export default pusherClient;
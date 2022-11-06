import { io } from "socket.io-client";

// const URL = "ws://localhost:3000/socket.io";
const URL = import.meta.env.VITE_BACKEND_URL;

const socket = io(URL,
    {
        autoConnect: false,
        transports: ['websocket'],
    }
);

socket.onAny((event, ...args) => {
    console.log(event, args);
});

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.stack}`);
});

export default socket;
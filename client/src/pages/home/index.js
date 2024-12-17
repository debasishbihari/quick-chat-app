import { useSelector } from "react-redux";
import ChatArea from "./components/chat";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io('http://localhost:5000');

function Home() {
  const { selectedChat, user } = useSelector((state) => state.userReducer);
  const [onlineUsers,setOnlineUsers] = useState([])
  
  useEffect(() => {
    if(user){
      socket.emit('join-room',user._id);
      socket.emit('user-login',user._id);
      socket.on('online-users',onlineUsers=>{
        setOnlineUsers(onlineUsers);
      })
      socket.on('online-users-updated',onlineUsers=>{
        setOnlineUsers(onlineUsers);
      })
    }
    },[user, onlineUsers]);

  return (
    <div className="home-page">
      <Header socket={socket} />
      <div className="main-content">
        <Sidebar socket={socket} onlineUsers={onlineUsers} />
        {selectedChat && <ChatArea socket={socket} />}
      </div>
    </div>
  );
}

export default Home;

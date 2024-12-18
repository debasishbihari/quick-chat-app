import { axiosInstance } from "./index";
const url = "https://quick-chat-app-prod.onrender.com";

export const getAllChats = async() =>{
    try {
        const response = await axiosInstance.get(url+'/api/chat/get-all-chats');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const createNewChat = async(members) =>{
    try {
        const response = await axiosInstance.post(url+'/api/chat/create-new-chat',{members});
        return response.data;
    } catch (error) {
        return error;
    }
}

export const clearUnreadMessageCount = async(chatId) =>{
    try {
        const response = await axiosInstance.post(url+'/api/chat/clear-unread-message',{chatId:chatId});
        return response.data;
    } catch (error) {
        return error;
    }
}
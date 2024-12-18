import { axiosInstance } from "./index";
const url = "https://quick-chat-app-prod.onrender.com";

export const createNewMessage = async(message) =>{
    try {
        const response = await axiosInstance.post(url+'/api/message/new-message',message);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAllMessages = async(chatId) =>{
    try {
        const response = await axiosInstance.get(`/api/message/get-all-messages/${chatId}`);
        return response.data;
    } catch (error) {
        return error;
    }
}
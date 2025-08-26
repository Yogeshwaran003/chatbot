import axios from "axios";
const API_URL = "https://91de315a2d07.ngrok-free.app";

export const sendMessage = async (message, history = []) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, 
      {"message": message,
        "history": history,
        "temperature": 0.4,
        "max_tokens": 300
       });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}

// export const fetchChatHistory = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/history`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching chat history:", error);
//     throw error;
//   }
// }

export const fetchChatHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/chathistory`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    throw error;
  }
}
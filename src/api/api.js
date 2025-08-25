import axios from "axios";
const API_URL = "https://2b9aa34a91a3.ngrok-free.app";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, 
      {"message": message,
        "history": [],
        "temperature": 0.4,
        "max_tokens": 300
       });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}

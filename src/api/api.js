import axios from "axios";
const API_URL = "https://5683b9c9c140.ngrok-free.app";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/ask`, 
      {"question": message,
        "user_id": "student_123",
        "session_id": "session_456"
       });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}

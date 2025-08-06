import axios from 'axios';

const api = axios.create({
  baseURL: 'https://63d79043d43e.ngrok-free.app', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});     

// Exported function to get next question suggestions
export const getNextQuestionSuggestions = async (question) => {
  try {
    const response = await api.post('/predict-next-question', { question });
    return response.data.next_questions;
  } catch (error) {
    console.error('Error getting next question suggestions:', error);
    throw error;
  }

};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:8000/',
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

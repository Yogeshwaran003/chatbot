import React from 'react';
import './Suggestions.css';

const Suggestions = ({ suggestions, onSuggestionClick }) => {
  if (!suggestions || suggestions.length === 0) return null;

  // Extract actual suggestions from the array (skip the first descriptive text)
  const actualSuggestions = suggestions.slice(1, -1).map(suggestion => {
    // Remove numbering and quotes
    return suggestion.replace(/^\d+\.\s*["']?|["']?$/g, '');
  });

  return (
    <div className="suggestions-container">
      <div className="suggestions-list">
        {actualSuggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-button"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
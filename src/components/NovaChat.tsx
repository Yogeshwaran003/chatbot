import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, BookOpen, Lightbulb } from "lucide-react";
import novaAvatar from "@/assets/nova-avatar.png";
import { getNextQuestionSuggestions } from "@/api/api";

interface Message {
  id: string;
  text: string;
  isNova: boolean;
  timestamp: Date;
}

export const NovaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm Nova, your learning buddy! 😊 I'm here to help you explore, learn, and grow. What would you like to discover today?",
      isNova: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isNova: false,
      timestamp: new Date(),
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Call API and display response
    try {
      const apiResponse = await getNextQuestionSuggestions(currentInput);
      const responseText = apiResponse && apiResponse.length > 0 
        ? apiResponse.join(', ') 
        : 'No response from API';
      
      const novaResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isNova: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, novaResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Error: Unable to get response from API',
        isNova: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "Help me with math",
    "Explain photosynthesis",
    "What is coding?",
  ];

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-subtle rounded-lg shadow-card">
        <img 
          src={novaAvatar} 
          alt="Nova AI Assistant" 
          className="w-12 h-12 rounded-full animate-pulse-gentle"
        />
        <div>
          <h2 className="text-xl font-semibold text-foreground">Chat with Nova</h2>
          <p className="text-muted-foreground">Your friendly learning companion</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isNova ? "justify-start" : "justify-end"}`}
          >
            <Card
              className={`max-w-[80%] ${
                message.isNova
                  ? "bg-card shadow-card border-primary/20"
                  : "bg-primary text-primary-foreground shadow-gentle"
              }`}
            >
              <CardContent className="p-3">
                {message.isNova && (
                  <div className="flex items-center gap-2 mb-2">
                    <img 
                      src={novaAvatar} 
                      alt="Nova" 
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-medium text-sm text-primary">Nova</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{message.text}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Try asking about:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <Button
                key={question}
                variant="outline"
                size="sm"
                onClick={() => setInputValue(question)}
                className="text-xs hover:bg-accent/50"
              >
                <Lightbulb className="w-3 h-3 mr-1" />
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Nova anything you'd like to learn..."
          className="flex-1 border-primary/20 focus:border-primary transition-colors"
        />
        <Button
          onClick={handleSendMessage}
          variant="nova"
          size="icon"
          disabled={!inputValue.trim()}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
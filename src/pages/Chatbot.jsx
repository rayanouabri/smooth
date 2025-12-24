import React, { useState, useRef, useEffect } from "react";
import { InvokeLLM } from "@/api/integrations";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User as UserIcon, Sparkles, BookOpen, Target, Brain } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI education assistant. I can help you with study notes, career guidance, interview preparation, and academic questions. How can I assist you today? 🎓"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadUser();
    scrollToBottom();
  }, [messages]);

  const loadUser = async () => {
    try {
      const userData = await User.me();
      setUser(userData);
    } catch (error) {
      console.log("User not authenticated");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const quickPrompts = [
    { text: "Help me with study notes", icon: BookOpen, color: "bg-blue-100 text-blue-800" },
    { text: "Career guidance", icon: Target, color: "bg-green-100 text-green-800" },
    { text: "Interview preparation", icon: Brain, color: "bg-purple-100 text-purple-800" },
    { text: "Academic help", icon: Sparkles, color: "bg-orange-100 text-orange-800" }
  ];

  const handleSend = async (message = input) => {
    if (!message.trim() || isLoading) return;

    const userMessage = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const context = user ? `User profile: ${user.full_name}, studying ${user.stream} at ${user.institute}, interests: ${user.interests?.join(', ')}, career goals: ${user.career_goals}` : "";
      
      const response = await InvokeLLM({
        prompt: `You are an AI education assistant for Indian students, especially those in Tamil Nadu. 
        Context: ${context}
        
        User question: ${message}
        
        Provide helpful, personalized responses focusing on:
        - Study techniques and notes
        - Career guidance for Indian job market
        - Interview preparation tips
        - Academic support
        - Skill development recommendations
        
        Be encouraging, specific, and actionable. Use emojis appropriately.`,
        add_context_from_internet: true
      });

      const assistantMessage = { role: "assistant", content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = { 
        role: "assistant", 
        content: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment. 🙏" 
      };
      setMessages(prev => [...prev, errorMessage]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[80vh] border-0 shadow-2xl glass-effect">
          <CardHeader className="border-b border-blue-100 gradient-bg text-white">
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Education Assistant</h2>
                <p className="text-blue-100 text-sm font-normal">Your personalized learning companion</p>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' ? 'bg-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}>
                      {message.role === 'user' ? (
                        <UserIcon className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      message.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white shadow-md border border-gray-100'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="p-6 pt-0">
                <p className="text-gray-600 text-sm mb-4">Try these quick prompts:</p>
                <div className="grid grid-cols-2 gap-3">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-auto p-4 justify-start gap-3 hover:scale-105 transition-transform ${prompt.color} border-0`}
                      onClick={() => handleSend(prompt.text)}
                    >
                      <prompt.icon className="w-5 h-5" />
                      <span className="text-left">{prompt.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-gray-100 p-6">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about your studies, career, or academics..."
                  className="flex-1 h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="h-12 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                AI responses are generated and may contain errors. Always verify important information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
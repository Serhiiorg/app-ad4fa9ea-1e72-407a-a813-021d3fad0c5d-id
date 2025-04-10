"use client";
import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatHeader } from "@/components/chatheader";
import { ChatHistory } from "@/components/chathistory";
import { ChatInput } from "@/components/chatinput";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  const handleSendMessage = useCallback((content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Prepare bot response
    setTimeout(() => {
      let botResponse = "";

      // Simple keyword-based responses
      if (
        content.toLowerCase().includes("hello") ||
        content.toLowerCase().includes("hi")
      ) {
        botResponse = "Hello! How can I help you today?";
      } else if (content.toLowerCase().includes("thank")) {
        botResponse = "You're welcome! Is there anything else I can help with?";
      } else if (content.toLowerCase().includes("help")) {
        botResponse = "I'm here to help! What do you need assistance with?";
      } else if (
        content.toLowerCase().includes("bye") ||
        content.toLowerCase().includes("goodbye")
      ) {
        botResponse = "Goodbye! Have a great day!";
      } else if (content.toLowerCase().includes("how are you")) {
        botResponse =
          "I'm just a bot, but I'm functioning well. Thanks for asking! How can I assist you?";
      } else {
        // Default response if no keywords match
        botResponse = `I received your message: "${content}". How can I assist you further?`;
      }

      const botMessage: Message = {
        id: uuidv4(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  }, []);

  const handleOpenSettings = useCallback(() => {
    // This would open settings in a real application
    alert("Settings functionality coming soon!");
  }, []);

  return (
    <div
      data-component="ChatPage"
      className="flex flex-col h-screen bg-background"
    >
      <ChatHeader
        title="AI Assistant"
        onClearChat={clearChat}
        onOpenSettings={handleOpenSettings}
      />
      <ChatHistory messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

"use client";
import React, { useRef, useEffect } from "react";
import { ChatMessage } from "@/components/chatmessage";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatHistoryProps {
  messages: Message[];
}

export function ChatHistory({ messages = [] }: ChatHistoryProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      data-component="ChatHistory"
      className="flex flex-col h-[calc(100vh-140px)] overflow-y-auto p-4 bg-background"
    >
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          <p className="text-center">
            Start a conversation by sending a message below.
          </p>
        </div>
      ) : (
        messages.map((message) => (
          <ChatMessage
            key={message.id}
            id={message.id}
            content={message.content}
            sender={message.sender}
            timestamp={
              message.timestamp instanceof Date
                ? message.timestamp
                : new Date(message.timestamp)
            }
          />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

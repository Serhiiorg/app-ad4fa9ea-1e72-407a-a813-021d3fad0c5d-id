"use client";
import React from "react";
import { format } from "date-fns";

interface ChatMessageProps {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatMessage({
  id,
  content,
  sender,
  timestamp,
}: ChatMessageProps) {
  const isUser = sender === "user";

  const formattedTime = format(timestamp, "h:mm a");

  return (
    <div
      data-component="ChatMessage"
      className={`flex w-full mb-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 shadow-sm ${
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-muted text-foreground rounded-tl-none"
        }`}
      >
        <div className="flex items-center mb-1">
          <span className="text-xs font-medium">
            {isUser ? "You" : "AI Assistant"}
          </span>
          <span className="text-xs ml-2 opacity-70">{formattedTime}</span>
        </div>
        <div className={`text-sm ${isUser ? "font-sans" : "font-serif"}`}>
          {content}
        </div>
      </div>
    </div>
  );
}

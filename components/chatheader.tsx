"use client";
import React from "react";
import { Bot, Trash2, Settings } from "lucide-react";

interface ChatHeaderProps {
  title?: string;
  onClearChat?: () => void;
  onOpenSettings?: () => void;
}

export function ChatHeader({
  title = "AI Assistant",
  onClearChat = () => {},
  onOpenSettings = () => {},
}: ChatHeaderProps) {
  return (
    <div
      data-component="ChatHeader"
      className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-card border-b border-border"
    >
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
          <Bot className="h-5 w-5" />
        </div>
        <h1 className="font-medium text-lg">{title}</h1>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onClearChat}
          className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Clear chat"
          title="Clear chat"
        >
          <Trash2 className="h-5 w-5" />
        </button>

        <button
          onClick={onOpenSettings}
          className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Settings"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

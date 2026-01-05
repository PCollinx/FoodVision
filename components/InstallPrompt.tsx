"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { Button } from "./Button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed (run once on mount)
    const checkInstalled = () => {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
        return true;
      }
      return false;
    };

    if (checkInstalled()) return;

    // Check if iOS (compute once, no state updates in effect)
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (iOS !== isIOS) {
      // Use queueMicrotask to defer state update
      queueMicrotask(() => setIsIOS(iOS));
    }

    // Listen for beforeinstallprompt event (Chrome, Edge, etc.)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;

      // Use queueMicrotask to defer state updates
      queueMicrotask(() => {
        setDeferredPrompt(promptEvent);

        // Only show after user has been on site for a bit
        setTimeout(() => {
          const dismissed = localStorage.getItem("pwa-prompt-dismissed");
          if (!dismissed) {
            setShowPrompt(true);
          }
        }, 5000); // Show after 5 seconds
      });
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [isIOS]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  if (isInstalled) return null;

  // iOS Install Instructions
  if (isIOS && showPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-xl shadow-2xl p-4 border-2 border-secondary z-50 max-w-md mx-auto">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-foreground/60 hover:text-foreground"
          aria-label="Dismiss"
        >
          <X size={20} />
        </button>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
            <Download size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Install FoodVision</h3>
            <p className="text-sm text-foreground/70 mb-3">
              Install this app on your iPhone: tap{" "}
              <span className="inline-block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="inline"
                >
                  <path
                    fill="currentColor"
                    d="M8 0a1 1 0 011 1v10.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 11.586V1a1 1 0 011-1z"
                  />
                </svg>
              </span>{" "}
              then <strong>Add to Home Screen</strong>
            </p>
            <Button size="sm" onClick={handleDismiss} className="w-full">
              Got it
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Android/Chrome Install Prompt
  if (deferredPrompt && showPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-xl shadow-2xl p-4 border-2 border-secondary z-50 max-w-md mx-auto">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-foreground/60 hover:text-foreground"
          aria-label="Dismiss"
        >
          <X size={20} />
        </button>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
            <Download size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Install FoodVision</h3>
            <p className="text-sm text-foreground/70 mb-3">
              Install our app for quick access and offline features!
            </p>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleInstallClick} className="flex-1">
                Install
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleDismiss}
                className="flex-1"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CookieConsent {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  hasConsented: boolean;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  savePreferences: (preferences: Omit<CookieConsent, "necessary" | "timestamp">) => void;
  openSettings: () => void;
  closeSettings: () => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_KEY = "cookie-consent";

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookieConsent;
        setConsent(parsed);
        setShowBanner(false);
        
        // Load analytics if consented
        if (parsed.analytics) {
          loadGoogleAnalytics();
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      // Show banner immediately if no consent stored
      setShowBanner(true);
    }
  }, []);

  const loadGoogleAnalytics = useCallback(() => {
    // Only load if not already loaded
    if (document.querySelector('script[src*="googletagmanager"]')) return;

    // Replace GA_MEASUREMENT_ID with actual ID when available
    const GA_ID = "G-XXXXXXXXXX"; // TODO: Replace with actual GA ID
    
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_ID);
  }, []);

  const saveConsent = useCallback((newConsent: CookieConsent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);

    if (newConsent.analytics) {
      loadGoogleAnalytics();
    }
  }, [loadGoogleAnalytics]);

  const acceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    saveConsent(newConsent);
  }, [saveConsent]);

  const acceptNecessary = useCallback(() => {
    const newConsent: CookieConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    saveConsent(newConsent);
  }, [saveConsent]);

  const savePreferences = useCallback((preferences: Omit<CookieConsent, "necessary" | "timestamp">) => {
    const newConsent: CookieConsent = {
      necessary: true,
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    saveConsent(newConsent);
  }, [saveConsent]);

  const openSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented: consent !== null,
        showBanner,
        showSettings,
        acceptAll,
        acceptNecessary,
        savePreferences,
        openSettings,
        closeSettings,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
};

// Extend window for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

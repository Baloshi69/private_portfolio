import React from "react";

type UseHoverTypewriterOptions = {
  defaultText: string;
  phrases: string[];
  typingDelay?: number;
  pauseDuration?: number;
};

type UseHoverTypewriterResult = {
  displayText: string;
  startHover: () => void;
  stopHover: () => void;
  isActive: boolean;
};

export const useHoverTypewriter = ({
  defaultText,
  phrases,
  typingDelay = 60,
  pauseDuration = 1500,
}: UseHoverTypewriterOptions): UseHoverTypewriterResult => {
  const [displayText, setDisplayText] = React.useState(phrases.length ? "" : defaultText);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);
  const phraseIndexRef = React.useRef(0);
  const charIndexRef = React.useRef(0);

  const clearTimer = React.useCallback(() => {
    if (timeoutRef.current !== null && typeof window !== "undefined") {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (phrases.length === 0) {
      setDisplayText(defaultText);
      setIsActive(false);
      return;
    }

    if (isHovered) {
      clearTimer();
      setIsActive(false);
      setDisplayText(defaultText);
      return;
    }

    setIsActive(true);

    const typeNext = () => {
      const currentPhrase = phrases[phraseIndexRef.current] ?? "";

      if (charIndexRef.current < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
        timeoutRef.current = window.setTimeout(typeNext, typingDelay);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          charIndexRef.current = 0;
          phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
          setDisplayText("");
          if (!isHovered) {
            typeNext();
          }
        }, pauseDuration);
      }
    };

    typeNext();

    return () => {
      clearTimer();
    };
  }, [clearTimer, defaultText, isHovered, pauseDuration, phrases, typingDelay]);

  React.useEffect(
    () => () => {
      clearTimer();
    },
    [clearTimer]
  );

  const startHover = React.useCallback(() => {
    clearTimer();
    phraseIndexRef.current = 0;
    charIndexRef.current = 0;
    setIsHovered(true);
    setDisplayText(defaultText);
    setIsActive(false);
  }, [clearTimer, defaultText]);

  const stopHover = React.useCallback(() => {
    phraseIndexRef.current = 0;
    charIndexRef.current = 0;
    setDisplayText("");
    setIsHovered(false);
  }, []);

  return { displayText, startHover, stopHover, isActive };
};

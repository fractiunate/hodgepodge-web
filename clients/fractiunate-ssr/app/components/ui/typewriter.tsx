import useTypewriter from "@/hooks/use-typewriter";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default ({
  className,
  text,
  speed,
}: {
  className?: string;
  text: string;
  speed?: number;
}) => {
  const [typewriterText, setTypewriterText] = useState(text);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const isDoneRef = useRef(false);
  const [displayText, isDone] = useTypewriter(typewriterText, speed);

  async function typeWriterTextList() {
    console.log("Typewriter effect started");
    while (!isDoneRef.current) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsHighlighted(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  useEffect(() => {
    isDoneRef.current = Boolean(isDone);
  }, [isDone]);

  useEffect(() => {
    let active = true;

    typeWriterTextList();
    return () => {
      active = false;
    };
  }, []);

  return (
    <p className={cn(className, isHighlighted ? "bg-purple-600" : "")}>
      {displayText}
    </p>
  );
};
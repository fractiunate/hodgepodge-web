import { useState, useEffect } from "react";

export default (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    setIsDone(false);

    setDisplayText("");

    async function typeEffect() {
      for (let i = 0; i < text.length; i++) {
        await sleep(speed);
        setDisplayText((prevText) => prevText + text.charAt(i));
      }
      setIsDone(true);
      console.log("Typewriter effect completed");
    }
    typeEffect();
    return () => {
      isDone;
    };
  }, [text, speed]);

  return [displayText, isDone];
};

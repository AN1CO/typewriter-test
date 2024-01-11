import { useState, useEffect } from "react";

export const Typewriter = ({ textArr }) => {
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    let counter = letterIndex;
    const interval = setInterval(() => {
      if (counter >= textArr.length) {
        clearInterval(interval);
      } else {
        setLetterIndex((count) => count + 1);
        counter++;
      }
    }, 500);
    return () => clearInterval(interval);
  }, [textArr, letterIndex]);

  let letterList = textArr.slice(0, letterIndex);

  return letterList.map((letter) => <li>{letter}</li>);
};

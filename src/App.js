import "./styles.css";
import React, { useState } from "react";
import { Typewriter } from "./components/Typewriter";
const url =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/676c75";

export const useGetWord = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState("");
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return Promise.reject(response);
      }
    })
    .then((data) => {
      setTimeout(() => {
        setIsLoading(false);
        setWord(data);
      }, 1000);
    });

  return { isLoading, word };
};

export default function App() {
  const { isLoading, word } = useGetWord();
  const textArr = word.split("");

  return (
    <div className="App">
      <h1>Typewriter Flag Challenge</h1>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          <Typewriter textArr={textArr} />
        </ul>
      )}
    </div>
  );
}

/**
 * For getting the initial link
 * This was written directly in the console, hence the vars
 * 
 * var codeElementsArr = Array.from(document.querySelectorAll("code.ramp"));
var validDivs = codeElementsArr.flatMap((item) => Array.from(item.childNodes)).filter((divItem) => divItem.nodeName === "DIV");
var validSpans = validDivs.flatMap((item) => Array.from(item.childNodes)).filter((spn) => spn.dataset.id.includes("21"))
var validItalics = validSpans.flatMap((item) => Array.from(item.childNodes)).filter((ita) => ita.nodeName === "I")
var link = validItalics.map((item) => item.attributes.value.nodeValue).join("")
 */

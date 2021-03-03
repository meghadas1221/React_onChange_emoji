import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing"
};

export default function App() {
  [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput]; //doubt

    if (meaning === undefined) {
      meaning = "Not available in database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning} </h2>
    </div>
  );
}

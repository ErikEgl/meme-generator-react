import React from "react";
import memesData from "./memesData";

export default function Meme() {
  // function plus() {
  //   setCount(prevCount  => prevCount + 1)
  // }
  // const [getMeme, setGetMeme] = React.useState("");

  // function getMemeImage() {
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);

  //   setGetMeme(memesArray[randomNumber].url)
  // }
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function changeMind() {
    setIsGoingOut(prevState => !prevState);
  }

  return (
    <>
      <main>
        <div className="form">
          <input type="text" placeholder="Top text" className="form--input" />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
          <button onClick={changeMind} className="form--button">
            Get a new meme image 🖼
          </button>
        </div>
        {/* <img src={getMeme} alt={getMeme} className="meme--image" /> */}
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </main>
    </>
  );
}

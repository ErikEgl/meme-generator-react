import React from "react";
import memesData from "./memesData";

export default function Meme() {


  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);


  function handleChange(event) {
    const { name, value } = event.target;
    
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <>
      <main>
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
          <button className="form--button" onClick={getMeme}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}

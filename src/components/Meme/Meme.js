import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState({});
  const ref = useRef(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current, meme]);

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMeme() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  const [deltaPosition, setDeltaPosition] = useState({x: 0, y: 0});
  const [rotation, setRotation] = useState(0);
  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;

    setDeltaPosition({
        x: x + ui.deltaX,
        y: y + ui.deltaY,
    });

    setRotation(rotation + ui.deltaX / 20);
};

  return (
    <>
      <main>
        <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input target"
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
        <div style={{ width: ref.current?.offsetWidth }} className="meme">
          <img
            ref={ref}
            alt="Text"
            src={meme.randomImage}
            className="meme--image"
          />
          {meme.topText.length > 0 && (<Draggable bounds={"parent"}>
            <h2 style={{ maxWidth: ref.current?.offsetWidth }} className="meme--text top">
                  {meme.topText}
            </h2>
          </Draggable>)}
 
          {meme.bottomText.length > 0 && (<Draggable bounds={"parent"}>
            <h2 style={{ maxWidth: ref.current?.offsetWidth }} className="meme--text bottom">
              {meme.bottomText}
            </h2>
          </Draggable>)}
          </div>
      </main>
    </>
  );
}

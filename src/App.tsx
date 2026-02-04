"use client";
import { useState } from "react";

// GIFS YOU CAN CHANGE
const DEFAULT_GIF =
  "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";

const YES_GIF =
  "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif";

const NO_GIFS = [
  "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif",
  "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
  "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif",
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const currentNoGif =
    NO_GIFS[Math.min(noCount - 1, NO_GIFS.length - 1)];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* IMAGE */}
      <img
        className="h-[200px]"
        src={
          yesPressed
            ? YES_GIF
            : noCount === 0
            ? DEFAULT_GIF
            : currentNoGif
        }
      />

      {/* TEXT */}
      {!yesPressed && (
        <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
      )}

      {/* BUTTONS */}
      {!yesPressed && (
        <div className="flex gap-4">
          <button
            className="rounded bg-green-500 px-4 py-2 font-bold text-white"
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>

          <button
            className="rounded bg-red-500 px-4 py-2 font-bold text-white"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      )}

      {yesPressed && (
        <div className="mt-4 text-4xl font-bold">
          WOOOOOO!!! 💖
        </div>
      )}
    </div>
  );
}

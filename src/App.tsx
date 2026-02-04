"use client";
import { useState } from "react";

// YES GIF
const YES_GIF =
  "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif";

// DEFAULT (before any No)
const DEFAULT_STAGE = {
  text: "No",
  gif: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
};

// EACH NO STAGE = ONE TEXT + ONE GIF
const NO_STAGES = [
  {
    text: "Are you sure?",
    gif: "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif",
  },
  {
    text: "What if I asked really nicely?",
    gif: "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
  },
  {
    text: "Pretty please",
    gif: "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif",
  },
  {
    text: "PLEASE POOKIE",
    gif: "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
  },
  {
    text: "I am going to die",
    gif: "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
  },
  {
    text: "ok ur talking to a ghost",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleNoClick = () => {
    setNoCount((prev) =>
      Math.min(prev + 1, NO_STAGES.length)
    );
  };

  const currentStage =
    noCount === 0
      ? DEFAULT_STAGE
      : NO_STAGES[noCount - 1];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* GIF */}
      <img className="h-[200px]" src={yesPressed ? YES_GIF : currentStage.gif} />

      {/* TEXT */}
      {!yesPressed && (
        <h1 className="my-4 text-4xl">
          Will you be my Valentine?
        </h1>
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
            {currentStage.text}
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

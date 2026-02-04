"use client";
import { useState } from "react";

// YES GIF
const YES_GIF =
  "https://media.tenor.com/yopy9CIqfgUAAAAM/ek-niranjan-brahmi.gif";

// DEFAULT (before any No)
const DEFAULT_STAGE = {
  text: "No",
  gif: "https://media1.tenor.com/m/K06Vfs4pwvwAAAAd/brahmanandham-sad.gif",
};

// EACH NO STAGE = ONE TEXT + ONE GIF
const NO_STAGES = [
  {
    text: "Are you sure?",
    gif: "https://gifdb.com/images/high/brahmi-looking-back-fcev5g9l4axzkhwd.webp",
  },
  {
    text: "What if I asked really nicely?",
    gif: "https://gifdb.com/images/high/brahmi-oops-wrong-number-2ny12cuhav90zhaj.webp",
  },
  {
    text: "Pretty please",
    gif: "https://gifdb.com/images/high/brahmi-sad-realization-duc8mby9gplgbtcg.webp",
  },
  {
    text: "PLEASE POOKIE",
    gif: "https://gifdb.com/images/thumb/beat-up-498-x-331-gif-x5rdl1zs7vhm2a02.gif",
  },
  {
    text: "I am going to die",
    gif: "https://gifdb.com/images/high/brahmi-wholesome-look-5tfoy1eohfwga70d.webp",
  },
  {
    text: "ok ur talking to a ghost",
    gif: "https://gifdb.com/images/thumb/brahmi-shaking-hands-no-no-x4w4u4u68kn629ce.gif",
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

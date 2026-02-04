import { useState } from "react";

/* =========================
   GIF CONFIGURATION
   ========================= */

// GIF shown BEFORE any click
const INTRO_GIF =
  "https://media.tenor.com/pUMrjnWCMbIAAAAM/kiss-muddu.gif";

// GIF shown AFTER YES
const YES_GIF =
  "https://gifdb.com/images/thumb/brahmi-open-arms-9ihf3kgemkw247oo.gif";

// EACH NO CLICK = ONE TEXT + ONE GIF
const NO_STAGES = [
  {
    text: "No",
    gif: "https://gifdb.com/images/thumb/brahmi-looking-back-fcev5g9l4axzkhwd.gif",
  },
  {
    text: "No?",
    gif: "https://gifdb.com/images/thumb/brahmi-king-gif-uqcftluxvtpb50i8.gif",
  },
  {
    text: "Bujji please",
    gif: "https://gifdb.com/images/thumb/brahmi-oops-wrong-number-2ny12cuhav90zhaj.gif",
  },
  {
    text: "PLEASE POOKIE",
    gif: "https://gifdb.com/images/thumb/brahmi-king-gif-zl3wqxv05j4hz1s4.gif",
  },
  {
    text: "Pandi Kukka",
    gif: "https://media.gifdb.com/brahmi-hold-me-back-tb2i1d0kdaypitbh.gif",
  },
];

/* =========================
   APP
   ========================= */

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const maxNo = NO_STAGES.length;

  // Button size logic
  const yesSize = 16 + noCount * 6; // grows on every No
  const noSize = Math.max(16 - noCount * 2, 10); // shrinks, never disappears

  const handleNoClick = () => {
    if (noCount < maxNo) {
      setNoCount((prev) => prev + 1);
    }
  };

  const currentNoStage =
    noCount > 0 ? NO_STAGES[noCount - 1] : null;

  const noDisabled = noCount >= maxNo;

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      {/* GIF */}
      <img
        className="mb-6 h-[220px]"
        src={
          yesPressed
            ? YES_GIF
            : noCount === 0
            ? INTRO_GIF
            : currentNoStage!.gif
        }
        alt="valentine gif"
      />

      {/* QUESTION */}
      {!yesPressed && (
        <h1 className="mb-6 text-4xl font-bold">
          Will you be my Valentine?
        </h1>
      )}

      {/* BUTTONS */}
      {!yesPressed && (
        <div className="flex items-center gap-4">
          {/* YES BUTTON */}
          <button
            style={{ fontSize: yesSize }}
            className="rounded bg-green-500 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-green-600"
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>

          {/* NO BUTTON */}
          <button
            style={{ fontSize: noSize }}
            className={`rounded px-6 py-3 font-bold text-white transition-all duration-300 ${
              noDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={handleNoClick}
            disabled={noDisabled}
          >
            {noCount === 0
              ? "No"
              : currentNoStage!.text}
          </button>
        </div>
      )}

      {/* YES MESSAGE */}
      {yesPressed && (
        <div className="mt-6 text-4xl font-bold">
          WOOOOOO!!! 💖💖💖
        </div>
      )}
    </div>
  );
}

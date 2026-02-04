import { useState } from "react";

// GIFS
const DEFAULT_GIF =
  "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

const YES_GIF =
  "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";

const NO_GIFS = [
  "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif",
  "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
  "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif",
];

export default function App()  {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const currentNoGif =
    NO_GIFS[Math.min(noCount - 1, NO_GIFS.length - 1)];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={YES_GIF} />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={noCount === 0 ? DEFAULT_GIF : currentNoGif}
          />

          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>

          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

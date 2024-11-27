import "./App.css";
import desktop from "./pattern-divider-desktop.svg";
import mobile from "./pattern-divider-mobile.svg";
import dice from "./icon-dice.svg";
import Fetch from "./fetch";
import { useState } from "react";

function App() {
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };
  return (
    <>
      <div className="grid h-screen items-center justify-center">
        <div className="bg-darkGrayshBlue relative w-96 max-w-1/3 p-10 flex flex-col items-center rounded-xl shadow-xl">
          <Fetch key={seed} />
          <picture className="pb-5">
            <source media="(min-width:600px)" srcSet={desktop} />
            <img src={mobile} alt="Separator" />
          </picture>

          <div
            onClick={reset}
            className="p-4 bg-neonGreen cursor-pointer hover:shadow-[0_0_20px_0] transition-all hover:shadow-neonGreen rounded-full absolute bottom-0 translate-y-2/4"
          >
            <img src={dice} alt="Dice" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

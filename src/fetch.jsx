import { useEffect } from "react";
import { useState } from "react";

const Fetch = () => {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdvice(data.slip);
      });
  }, []);
  return (
    <div>
      {advice ? (
        <div className="flex flex-col items-center">
          <h1 className="font-Manrope text-neonGreen text-xs tracking-[.3em] font-semibold">
            ADVICE #{advice.id}
          </h1>

          <p
            className="text-lightCyan font-Manrope font-bold text-xl text-center py-5"
            key={advice.id}
          >
            {advice.advice}
          </p>
        </div>
      ) : (
        <p className="text-lightCyan font-Manrope font-bold text-xl text-center py-5">
          Loading advice...
        </p>
      )}
    </div>
  );
};
export default Fetch;

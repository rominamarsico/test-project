import { useState } from "react";
import "./Vacation.css";
import summerSrc from "../assets/summer.jpg";
import winterSrc from "../assets/winter.jpg";

export function VacationOld() {
  const [isWinterVacation, setIsWinterVacation] = useState(null);

  return (
    <div className="vacationContainer">
      <h2>Choose your dream vacation</h2>
      <div className="vacationButtonContainer">
        <button
          className="vacationButton"
          onClick={() => setIsWinterVacation(true)}
        >
          Winter Wonderland
        </button>
        <button
          className="vacationButton"
          onClick={() => setIsWinterVacation(false)}
        >
          Tropical Island
        </button>
      </div>

      {isWinterVacation === null ? null : (
        <div>
          {isWinterVacation ? <img src={winterSrc} /> : <img src={summerSrc} />}
        </div>
      )}
    </div>
  );
}

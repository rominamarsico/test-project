import "./Vacation.css";
import { useState } from "react";
import summerSrc from "../assets/summer.jpg";
import winterSrc from "../assets/winter.jpg";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export function Vacation() {
  const [vacation, setVacation] = useState("");

  const title = <h2>Choose your dream vacation</h2>;

  const toggleButtons = (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={vacation}
      onChange={(e) => setVacation(e.target.value)}
      aria-label="Platform"
    >
      <ToggleButton value="winter">Winter Wonderland</ToggleButton>
      <ToggleButton value="summer">Tropical Island</ToggleButton>
    </ToggleButtonGroup>
  );

  const imgSummer = <img src={summerSrc} />;
  const imgWinter = <img src={winterSrc} />;
  const showImage = <div>{vacation === "winter" ? imgWinter : imgSummer}</div>;

  const selectedImage = (
    <div className="imageContainer">{vacation === "" ? null : showImage}</div>
  );

  return (
    <div className="vacationContainer">
      {title}
      {toggleButtons}
      {selectedImage}
    </div>
  );
}

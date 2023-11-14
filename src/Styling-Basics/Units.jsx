import "./Units.css";

export function Units() {
  return (
    <div className="font-size">
      Wie groß werde ich mit den Einheiten px oder rem?
      <div className="big-container">
        <div className="color-white">I have 100% width</div>
        <div className="full-width">I have 100% width</div>
      </div>
      <div className="small-container">
        <div className="color-white">I have 50% width</div>
        <div className="full-width">I have 100% width</div>
      </div>
    </div>
  );
}

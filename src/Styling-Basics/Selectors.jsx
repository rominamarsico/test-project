import "./Selectors.css";

export function Selectors() {
  return (
    <>
      <h3>I have no className or id</h3>
      <h3 className="orange-text">I have a className</h3>
      <h3 id="green-text">I have an id</h3>
      <h3 id="green-text" className="orange-text">
        I have a classname and an id
      </h3>
    </>
  );
}

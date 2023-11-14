import "./Flexbox.css";

export function Flexbox() {
  return (
    <div>
      <div className="flexbox-container">
        <div className="dark-box" />
        <div className="light-box" />
        <div className="dark-box" />
        <div className="light-box" />
      </div>

      <div className="links">
        <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          target="blank"
        >
          Link to CSS Tricks page - flexbox
        </a>
        <a href="https://flexboxfroggy.com/#de" target="blank">
          Link to flexbox froggy
        </a>
      </div>
    </div>
  );
}

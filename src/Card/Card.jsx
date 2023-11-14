import "./Card.css";

export function Card({ title, link, logo }) {
  return (
    <div className="wrapper">
      <div className="logo-box">
        <img src={logo} />
      </div>
      <div className="text-box">
        <h2>{title}</h2>
        <a href={link} className="link">
          Link to {title} page
        </a>
      </div>
    </div>
  );
}

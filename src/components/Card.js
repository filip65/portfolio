import React from "react";
import "../css/card.scss";

function Card({ info }) {
  const { name, img, link, tools, github } = info;

  return (
    <div className="card">
      <div className="card__content">
        <div className="front">
          <div
            className="img"
            style={{ backgroundImage: `url(./img/${img})` }}
          ></div>
        </div>

        <div className="back">
          <div className="back__content">
            <ul className="list">
              {tools.map((tool, index) => {
                return <li key={index}>{tool}</li>;
              })}
            </ul>
            <div className="buttons">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="btn github"
              >
                Github
              </a>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="btn visit"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="title">
        <p>
          <span className="code">{`<`}</span> {name}
          <span className="code">{`/>`}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;

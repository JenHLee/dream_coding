import React from "react";
import "../App.css";

export default function Profile({ image, name, title }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avatar" />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

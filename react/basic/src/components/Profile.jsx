import React from "react";
import "../App.css";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avatar" />
      { isNew && <span className="new">New</span> } 
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

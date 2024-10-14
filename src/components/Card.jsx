import React from 'react';

function Card(props) {
  return (
    <article className="card">
      <img
        src={props.blogImage}
        alt="Image of HTML & CSS Foundations article"
      />
      <div className="content">
        <div className="category">
          <span>{props.category}</span>
        </div>
        <p className="date">Published {props.date}</p>
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
      <footer>
        <img src={props.userImage} alt="Image of Greg Hooper" />
        <p className="author">{props.author}</p>
      </footer>
    </article>
  );
}

export default Card;

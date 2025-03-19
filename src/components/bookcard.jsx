import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "250px",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px"
  }
};

export default BookCard;

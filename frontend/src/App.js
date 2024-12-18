import React, { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

<<<<<<< HEAD
=======
    if (price < 0) {
      alert("Price cannot be negative");
      return;
    }
>>>>>>> d86a082 (Uptade CSS)

    const book = {
      title: title,
      author: author,
      isbn: isbn,
<<<<<<< HEAD
      price: parseFloat(price), 
=======
      price: parseFloat(price),
>>>>>>> d86a082 (Uptade CSS)
    };

    try {
      const response = await fetch("http://localhost:8080/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        alert("Book successfully added!");
        setTitle("");
        setAuthor("");
        setIsbn("");
        setPrice("");
      } else {
        alert("Error adding book");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server");
    }
  };

<<<<<<< HEAD
  return (
      <div>
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
=======
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Espaçamento entre os elementos do formulário
    width: "300px", // Largura fixa do formulário
    margin: "0 auto", // Centraliza o formulário na página
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
      <div>
        <h1 style={{ textAlign: "center" }}>Add Book</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div>
            <label style={labelStyle}>Title:</label>
>>>>>>> d86a082 (Uptade CSS)
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
<<<<<<< HEAD
            />
          </div>
          <div>
            <label>Author:</label>
=======
                style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Author:</label>
>>>>>>> d86a082 (Uptade CSS)
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
<<<<<<< HEAD
            />
          </div>
          <div>
            <label>ISBN:</label>
=======
                style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>ISBN:</label>
>>>>>>> d86a082 (Uptade CSS)
            <input
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                required
<<<<<<< HEAD
            />
          </div>
          <div>
            <label>Price:</label>
            <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
          </div>
          <button type="submit">Add Book</button>
=======
                style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Price:</label>
            <input
                type="number"
                step="1"
                value={price}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (value >= 0 || e.target.value === "") {
                    setPrice(e.target.value);
                  }
                }}
                required
                style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Add Book
          </button>
>>>>>>> d86a082 (Uptade CSS)
        </form>
      </div>
  );
}

function App() {
  return (
      <div>
        <AddBook />
      </div>
  );
}

export default App;

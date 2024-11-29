import React, { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();


    const book = {
      title: title,
      author: author,
      isbn: isbn,
      price: parseFloat(price), 
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

  return (
      <div>
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
          </div>
          <div>
            <label>ISBN:</label>
            <input
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                required
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
